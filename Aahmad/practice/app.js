const express = require("express");
const app = express();

app.use(express.static(__dirname+"/assets"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded());


app.get("/", (req, res)=>{
    res.render("home/index");
})
app.get("/about", (req, res)=>{
    res.render("about/index");
})
app.get("/contact", (req, res)=>{
    res.render("contact/index");
})
app.get("/student", (req, res)=>{
    res.render("student/index");
})
app.get("/courses", (req, res)=>{
    res.render("courses/index");
})



app.post("/student/add", (req, res)=>{
    console.log(req.body);
    req.body.age = parseInt(req.body.age);
    console.log(req.body);

})



const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("server running");
})