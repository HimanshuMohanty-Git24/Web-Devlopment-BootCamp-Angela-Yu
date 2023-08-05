//jshint esversion:6
require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate= require("mongoose-findorcreate");
// const encrypt = require("mongoose-encryption");
// const md5 = require("md5");
// const bcrypt = require("bcrypt");
// const saltRounds = 10;
const app = express();


app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(session({
    secret: 'Our little secret.',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://127.0.0.1:27017/userDB", {useNewUrlParser: true, useUnifiedTopology: true});
// mongoose.set("useCreateIndex", true);

const userSchema = new mongoose.Schema ({
    email: String,
    password: String,
    googleId: String,
    secret: String
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

// const secret=process.env.SECRET;
// userSchema.plugin(encrypt, {secret: secret, encryptedFields: ["password"]});

const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id)
        .then(function(user) {
            done(null, user);
        })
        .catch(function(err) {
            console.log(err);
        });
});

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/secrets",
    // userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
  },
  function(accessToken, refreshToken, profile, cb) {
    // console.log(profile);
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/auth/google",function(req,res){
    passport.authenticate("google",{scope:["profile"]})(req, res);
});

app.get("/auth/google/secrets",function(req,res){
    passport.authenticate("google",{failureRedirect:"/login"})(req, res, function(){
        res.redirect("/secrets");
    });
});

app.get("/login", function(req, res) {
    res.render("login");
});

app.get("/register", function(req, res) {
    res.render("register");
});

app.get("/secrets", function(req, res) {
    User.find({"secret": {$ne: null}})
        .then(function(foundUsers) {
            if (foundUsers) {
                res.render("secrets", { usersWithSecrets: foundUsers });
            }
        })
        .catch(function(err) {
            console.log(err);
        });
});


app.get("/submit", function(req, res) {
    if(req.isAuthenticated()) {
        res.render("submit");
    } else {
        res.redirect("/login");
    }
});

app.post("/submit", function(req, res) {
    const submittedSecret = req.body.secret;
    if (req.user && req.user.id) {
        User.findById(req.user.id)
            .exec()
            .then(function(foundUser) {
                if(foundUser) {
                    foundUser.secret = submittedSecret;
                    foundUser.save()
                        .then(function() {
                            res.redirect("/secrets");
                        })
                        .catch(function(err) {
                            console.log(err);
                        });
                }
            })
            .catch(function(err) {
                console.log(err);
            });
    } else {
        res.redirect("/login");
    }
});

app.get("/logout", function(req, res) {
    req.logout(function(err) {
        if (err) {
            console.log(err);
        }
        res.redirect("/");
    });
});

app.post("/register", function(req, res) {
    User.register({username: req.body.username}, req.body.password, function(err, user) {
        if(err) {
            console.log(err);
            res.redirect("/register");
        } else {
            passport.authenticate("local")(req, res, function() {
                res.redirect("/secrets");
            });
        }
    });
});

app.post("/login", function(req, res) {
    const user = new User ({
        username: req.body.username,
        password: req.body.password
    });
    req.login(user, function(err) {
        if(err) {
            console.log(err);
        } else {
            passport.authenticate("local")(req, res, function() {
                res.redirect("/secrets");
            });
        }
    });
});


app.listen(3000, function() {
    console.log("Server started on port 3000");
});

