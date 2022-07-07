var express = require("express");
var app = express();

//      localhost:3000

app.get("/", (req, res)=>{
    // console.log(__dirname);
    res.sendFile(__dirname+"/index.html");
});



app.get("/about", (req, res)=>{
    res.sendFile(__dirname+"/about.html");
})

app.get("/contact", (req, res)=>{
    res.sendFile(__dirname+"/contact.html");

})



app.listen(3000);

// console.log("hello");