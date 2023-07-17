const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/",function(req,res){
    var today = new Date();
    var currentDay = today.getDate();
     
    if(currentDay===6||currentDay===0){
        res.send("<h1>Yay it's the weekend!</h1>");
    }
    else{
        res.sendFile(__dirname+"/index.html");
    }
})

app.listen(3000,function () {
    console.log("server started on port 3000");
})