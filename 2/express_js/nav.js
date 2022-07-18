
const express = require("express");

const app = express();

var port = 3000 ;

app.get("/", (req,res) => {
    res.send("hello from the express");
});

app.get("/app", (req,res) => {
    res.send("hello from the express");
});

app.get("/about", (req,res) => {
    res.sendStatus(200).send("hello from the express");
    // res.status(200).send("hello from the express");  // thapa syntax
});

app.get("/abj", (req,res) => {
    res.send({
        id : 1 ,
        name : "nik"
    });
});  // we are show object here 
// app.get("/abjs", (req,res) => {
//     res.send({
//         "id" : "1" ,
//         "name" : "nik"
//     });
// });
app.get("/abjs", (req,res) => {
    res.json({
        "id" : "1" ,
        "name" : "nik"
    });
});

app.get("/arr", (req,res) => {
    res.send([{
        id : 1 ,
        name : "nik"
    }]);  // we are get array here
});

app.listen(port // `${port}`
, () => {
    console.log("listing the port at 3000");
});

// in react by default 3000