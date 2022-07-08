const express = require("express");
const app = express();





// create a route --- http://localhost:3000


app.use(express.static(__dirname+"/assets"));


app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/index.html");
})
app.get("/about", (req, res)=>{
    res.sendFile(__dirname+"/about.html");
})
app.get("/contact", (req, res)=>{
    res.sendFile(__dirname+"/contact.html");
})





// create our virtual server with 3000 port
app.listen(3000, ()=>{
    console.log("server running ---------");
});

