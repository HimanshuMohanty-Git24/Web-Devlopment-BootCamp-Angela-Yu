const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https=require("https");
const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html");
})
app.post("/",function(req,res){
    const firstname = req.body.fname;
    const lastname = req.body.lname;
    const email= req.body.email;
    const data={
        members:[{
            email_address:email,
            status:"subscribed",
            merge_fields:{
                FNAME:firstname,
                LNAME:lastname
            }
        }
        ]
    };
    const jsonData = JSON.stringify(data);
    const url="https://us21.api.mailchimp.com/3.0/lists/66ba084ce3";
    const options= {
        method:"POST",
        auth:"codehimanshu21:825e2112a513007cecf27128dde1233b-us21"
    }
    const request=https.request(url,options,function(){
        console.log(express.response.statusCode);
        if(express.response.statusCode===200){
            res.sendFile(__dirname+"/success.html");
        }
        else{
            res.sendFile(__dirname+"/failure.html");
        }
        express.response.on("data",function(data){
            console.log(JSON.parse(data));
        })
    })
    //failure check
    // express.response.statusCode = 400;
    request.write(jsonData);
    request.end();

})
app.post("/failure",function(req,res){
    res.redirect("/");
})
app.listen(process.env.PORT || 3000,function () {
    console.log("Listening to port 3000");
})
//API KEY
//825e2112a513007cecf27128dde1233b-us21
//Audience ID
//66ba084ce3