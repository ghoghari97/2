
const express = require("express");

const app = express();

app.get("/", (req,res) => {
    res.send("hello from the express");
});

app.get("/about", (req,res) => {
    res.send("This is about page");
    res.send("404.js");
});

app.listen(8000 , () => {
    console.log("listing the port at 3000");
});