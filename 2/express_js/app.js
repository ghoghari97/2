
const express = require("express");

const app = express();

app.get("/", (req,res) => {
    res.send("hello from the express");
});

app.get("/about", (req,res) => {
    res.send("This is about page");
});

app.listen(8000 , () => {
    console.log("listing the port at 3000");
});

//  we are checkout our output localhost:8000

// note :- first start your cord using cmd