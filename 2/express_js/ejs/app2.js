var express = require('express');
var app = express();
var port = 8000 ;
var path = require('path');

var ejs_folder_path = path.join(__dirname,'templates') ;

var expresslayouts = require('express-ejs-layouts');

app.use(expresslayouts);
app.set('layout','examples.ejs');  // by defaults layout file is change form examples.ejs  

app.set("view engine","ejs");  // set the view engine
app.set("views", ejs_folder_path );

app.get("/", (req,res) => {
    res.send(`${ejs_folder_path}\index.html`);
});

app.get("/contact", (req,res) => {
    res.send(`${ejs_folder_path}\index.html`);
});

app.get("/profile", (req,res) => {
    
    var user = {
        name : 'ghoghari' ,
        age : 22
    }
    res.render('header', { user } );  // helpful for which file run 
});

app.get("*", (req,res) => {
    
    var user = {
        errorcomemnt : 'Page not found' ,
        age : 22
    }
    res.render('headers', { user } );  // helpful for which file run 
});

// app.get("*",(req,res) => {
//     res.send("page not found");
// });  // use for 404 page

// app.get("/profiles", (req,res) => {
    
//     var user = {
//         name : 'ghoghari' ,
//         age : 22
//     }
//     res.render('exampless', { user } );
// });  run second files 

app.listen(port , () => {
    console.log(`listing the port at 8000`);
});

// layout but also added examples.ejs  99% lauout + 1 % examples.ejs
// but now 99% examples.ejs + 1 % add headers.ejs 
