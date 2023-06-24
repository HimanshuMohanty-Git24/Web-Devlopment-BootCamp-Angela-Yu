const express = require('express');
const app = express();

app.get("/",function(req,res){
    // console.log(req);
    res.send("<h1>Hello, World!</h1>");
});
app.get("/Contact",function(req,res){
    res.send("<h1>This is the contact</h1>");
});
app.get("/about",function(req,res){
    res.send("<h1>This is the about page</h1>");
});
app.get("/hobbies",function(req,res){
    res.send("<ul><li>Geopolitics</li><li>Gaming</li></ul>");
})
app.listen(3000,function(){
    console.log("Server started on port 3000");
});