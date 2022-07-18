
const express = require("express");

const app = express();

app.set("view engine","hbs");  //1

// built in middleware
app.use(express.static("C:/node nikunj/express_js/viewzs"));

app.get("/home", (req,res) => {
    res.render("home.js");    //2
});

app.listen(8000 , () => {
    console.log("listing the port at 3000");
});