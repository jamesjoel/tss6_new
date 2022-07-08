const express = require("express");
const app = express();

app.use(express.static(__dirname+"/assets"));
app.set("view engine", "ejs");

app.get("/", (req, res)=>{
    // res.sendFile()
    var a = "mumbai";

    var b = { x : a, name : "rohit", color : ["red", "green", "blue"] };

    res.render("index", b);
})



const port = 3000;

app.listen(port, ()=>{
    console.log("Server Running");
})