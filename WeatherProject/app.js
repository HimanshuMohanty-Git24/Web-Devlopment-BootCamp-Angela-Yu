const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const https = require('https');
app.use(bodyparser.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
})
app.post("/",function(req,res){
    const query = req.body.cityName;
    const apikey="082b02ac5268478050afccdb34e62dad";
    const units = "metric";
    const url ="https://api.openweathermap.org/data/2.5/weather?q="+query+"&APPID="+apikey+"&units="+units;
    https.get(url,function(response){
        console.log(response.statusCode);
        response.on("data",function(data){
            const WeatherData=JSON.parse(data);
            console.log(WeatherData);
            const temp = WeatherData.main.temp;
            const desc = WeatherData.weather[0].description;
            const City =WeatherData.name;
            const icon = WeatherData.weather[0].icon;
            const imgUrl="https://openweathermap.org/img/wn/"+icon+"@2x.png";
            console.log(temp);
            console.log(desc);
            res.write("<p>The weather is currently "+desc+"</p><br >");
            res.write("<h1>The temprature in "+City+" is "+temp+" Degrees Celcius</h1>");
            res.write("<img src="+imgUrl+">");
            res.send();
        });
    });
});

app.listen(3000,function(){
    console.log("Listening to port 3000");
})