const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine', 'ejs');

app.get("/",function(req,res){
    var today = new Date();
    var currentDay = today.getDay();
    var day = "";
    var msg="";

    switch(currentDay){
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default:
            console.log("Error: current day is equal to: "+currentDay);
    }
    if(currentDay===0 || currentDay===6){
        msg= "Happy Weekend!";
    }
    else{
        msg= "Work Hard Buddy!";
    }
    res.render("list",({
        KindOfDay: day
        ,Message: msg}));
})

app.listen(3000,function () {
    console.log("server started on port 3000");
})