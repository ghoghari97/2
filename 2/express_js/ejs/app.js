
// var express = require('express');
// var app = express();
// var port = 8000 ;
// var path = require('path');

// var ejs_folder_path = path.join(__dirname,'') ;

// app.set("view engine","ejs");  // set the view engine

// app.get("/", (req,res) => {
//     res.send(`${ejs_folder_path}\index.html`);
// });

// app.get("/contact", (req,res) => {
// });

// app.get("/profile", (req,res) => {
    
//     var user = {
//         name : 'ghoghari' ,
//         age : 22
//     }
//     res.render('profile', { user } );
// });

// app.listen(8000 , () => {
//     console.log(`${ejs_folder_path}/about.html`);
// });

///////////////////////////////////////////////////////// views directory change //////////////////////////////

var express = require('express');
var app = express();
var port = 8000 ;
var path = require('path');

var ejs_folder_path = path.join(__dirname,'templates') ;

app.set("view engine","ejs");  // set the view engine
app.set("views", ejs_folder_path );

app.get("/profile", (req,res) => {

    var user = {
        name : 'ghoghari' ,
        age : '22'
    }
    res.render('profile', { user } );
});

app.get("/about", (req,res) => {

    var user = {
        name : 'ghoghari' ,
        age : 22
    }
    res.render('about', { user } );  
});

app.listen(8000 , () => {
    console.log("listing the port at 8000");
});

