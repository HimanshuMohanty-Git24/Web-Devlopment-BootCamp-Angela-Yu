const express = require('express');
const mongoose = require('mongoose');
const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/fruitDB', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log("Connected to DB");
}).catch((err) => {
    console.log(err);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
const fruitSchema =new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please check your data entry, no name specified!"]
    },
    rating:{
        type:Number,
        min:1,
        max:10
    },
    review:String
});

const Fruit = mongoose.model("Fruit",fruitSchema);

const fruit = new Fruit({
    name:"Apple",
    rating:7,
    review:"Pretty solid as a fruit"
});

const personSchema = new mongoose.Schema({
    name:String,
    age:Number
});
const Person = mongoose.model("Person",personSchema);
const person = new Person({
    name:"John",
    age:37
});
person.save();

// const kiwi = new Fruit({
//     name:"Kiwi",
//     rating:10,
//     review:"The best fruit"
// });
// const orange = new Fruit({
//     name:"Orange",
//     rating:4,
//     review:"Too sour for me"
// });
// const banana = new Fruit({
//     name:"Banana",
//     rating:3,
//     review:"Weird texture"
// });
// Fruit.insertMany([kiwi,orange,banana])
//     .then(() => {
//         console.log("Successfully saved all the fruits to fruitDB");
//     })
//     .catch((err) => {
//         console.log(err);
//     });

Fruit.find()
    .then((fruits) => {
        fruits.forEach((fruit) => {
            console.log(fruit.name);
        });
        mongoose.connection.close();
    })
    .catch((err) => {
        console.log(err);
    });

