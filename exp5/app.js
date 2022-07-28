const express = require("express");
const app = express();
const demo = require("./demo");

app.use(express.json())
app.use(express.urlencoded())


app.get("/", (req, res)=>{

    res.send("Welcome");
})

app.get("/about", (req, res)=>{
    res.sendFile(__dirname+"/about.html");
    // var a = "Rohit verma";
    // fs.writeFile("hello.txt", a, (err)=>{
    //     res.send("Saved");
    // })
})

app.post("/save", (req, res)=>{
    //console.log(req.body);
    var a = req.body.msg;
    // fs.writeFile("hello.txt", a, (err)=>{
    //     res.redirect("/");
    // })
    demo.fileCreate(a, (err)=>{
        res.redirect("/about");
    })
})



app.listen(3000, ()=>{
    console.log("running");
})