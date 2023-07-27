require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.json());
const db_url=process.env.DB_URL;//DB URL for security reasons
mongoose.connect(`${db_url}`, {useNewUrlParser: true, useUnifiedTopology: true});//Connect to DB

const articleSchema = {
    title: String,
    content: String
};//Schema for article

const Article = mongoose.model("Article", articleSchema);//Model for article

app.route("/articles")
//For all articles:
.get(async function(req, res){
    try {
        const foundArticles = await Article.find();
        console.log(foundArticles);
        res.send(foundArticles);
    } catch (err) {
        console.log(err);
        res.send(err);
    }
})
.post(async function(req, res){
    // console.log(req.body.title);
    // console.log(req.body.content);
    try {
        const newArticle = new Article({
            title: req.body.title,
            content: req.body.content
        });
        await newArticle.save();
        res.send("Successfully added a new article.");
    } catch (err) {
        console.log(err);
    }
})
.delete(async function(req, res){
    try {
        await Article.deleteMany();
        res.send("Successfully deleted all articles.");
    } catch (err) {
        console.log(err);

    }
});

//For specific articles:
app.route("/articles/:articleTitle")

.get(async function(req, res){
    const articleTitle = req.params.articleTitle;
    try {
        const article = await Article.findOne({title: articleTitle});
        if (article){
            const jsonArticle = JSON.stringify(article);
            res.send(jsonArticle);
        } else {
            res.send("No article with that title found.");
        }
    } catch (err) {
        console.log(err);
        res.send(err);
    }
})

.patch(async function(req, res){
    const articleTitle = req.params.articleTitle;
    try {
        await Article.updateOne(
            {title: articleTitle},
            {content: req.body.newContent}
        );
        res.send("Successfully updated selected article.");
    } catch (err) {
        console.log(err);
        res.send(err);
    }
})

.put(async function(req, res){
    const articleTitle = req.params.articleTitle;
    try {
        await Article.findOneAndReplace(
            {title: articleTitle},
            {content: req.body.newContent},
            {overwrite: true}
        );
        res.send("Successfully updated the content of the selected article.");
    } catch (err) {
        console.log(err);
        res.send(err);
    }
})

.delete(async function(req, res){
    const articleTitle = req.params.articleTitle;
    try {
        await Article.deleteOne({title: articleTitle});
        res.send("Successfully deleted selected article.");
    } catch (err) {
        console.log(err);
        res.send(err);
    }
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});