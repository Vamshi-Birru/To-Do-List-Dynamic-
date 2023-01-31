const express=require("express");
const mongoose =require('mongoose');
const MongoClient = require("mongodb").MongoClient;


const app=express();




mongoose.connect("mongodb://127.0.0.1/todo1_express",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine","ejs");
app.use(require("./routes/index"));
app.use(require("./routes/todo"));
app.use(express.static(__dirname + '/public'));
app.listen(2000,()=>console.log("Server just started"));
