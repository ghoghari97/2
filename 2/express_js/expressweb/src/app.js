var express = require('express');
var app = express();
var port = 3000 ;
// var port = process.env.port || 3000 ;  whener we are hosting when

var path = require('path');
app.set("view engine","ejs");

app.use(express.static('C:/node nikunj/express_js/expressweb/src/views/public/css'));  // in this project learn how to style ejs files
// app.use(express.static('C:/node nikunj/express_js/expressweb/src/views/public/images'));

var expresslayouts = require('express-ejs-layouts');
app.use(expresslayouts);
app.set('layout','index.ejs');

app.get("/", (req,res) => {
    res.render('home');
    // res.render('index');
});

app.get("/index", (req,res) => {
    res.render('home');
});

app.get("/about", (req,res) => {
    // res.send("Welcome to about page");
    res.render('about');
});

app.get("/about/*", (req,res) => {
    res.send("This about page does not exist");
});

app.get("/weather", (req,res) => {
    res.render('weather');
});

app.get("*", (req,res) => {
    res.render('404');
});

app.listen(port , () => {
    // console.log("okay");
})
