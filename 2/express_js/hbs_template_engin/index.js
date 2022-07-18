
const express = require("express");

const hbs = require("hbs");

const app = express();

const port = 3000 ;
const templetepath = "C:\node nikunj\express_js\hbs_template_engin\templates" ;

// app.set("views",templetepath);

app.set("view engine","hbs");  // set the view engine
app.set("views",templetepath);

// // template engine route
// app.get("/", (req,res) => {
//     res.render("C:/node nikunj/hbs_template_engin/index");  // we are use sender into render & here we are add index or index.hbs both time run index.hbs
// });

// template engine route
app.get("/", (req,res) => {
    res.render("C:/node nikunj/hbs_template_engin/index" , {
        name:"thapa" ,
        channel:'xyz'  
    });  // we are use sender into render & here we are add index or index.hbs both time run index.hbs
});

app.("/about", (req,res) => {
    res.render("about.hbs");
});

app.listen(port, () => {
    console.log("listing the port at 3000");
}); 

// some parts are .....