
// once again practice server bncz this files are remove suddently by me

// var a = require("http");
// var c = require("fs");

// var b = a.createServer( (req , res) => {
//     if(req.url == "/"){
//         res.end("This is home page");
//     } else if (req.url == "/api"){
//         var d = c.readFile(`${__dirname}/api.json`, 'utf-8' , (err,data) => {
//         console.log(data)
//         var e = JSON.parse(data);
//         res.writeHead(200 , { "content-type" : "application/json"});  // whener we are dial with json when we are write this compulsory
//         res.end(e.name);
//         });
//         // res.end("This is api page");
//     } else {
//         res.end("404");
//     }
// });

// b.listen(8000 , "127.0.0.1" , () => {
//     console.log("okay");
// });

//////////////////////////////////////////////////////////////////////////////////////////////////////////

var a = require("http");
var c = require("fs");

var b = a.createServer( (req , res) => {

    var data = c.readFileSync(`${__dirname}/api.json`, 'utf-8');
    var e = JSON.parse(data);

    if(req.url == "/"){
        res.end("This is home page");
    } else if (req.url == "/api"){
        res.writeHead(200 , { "content-type" : "application/json"});  // whener we are dial with json when we are write this compulsory
        res.end(e.name );
        // res.end("This is api page");
    } else {
        res.end("404");
    }
});

b.listen(8000 , "127.0.0.1" , () => {
    console.log("okay");
});