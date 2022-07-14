const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;

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



app.post("/student/add", (req, res)=>{
    req.body.age = parseInt(req.body.age);
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("tss5_30");
        db.collection("student").insertOne(req.body, (err)=>{
            // console.log("saved");
            res.redirect("/student/list");
        });
    });

})



app.get("/student/list", (req, res)=>{
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("tss5_30");
        db.collection("student").find().toArray((err, result)=>{
            // console.log(result);
            var pagedata = { result : result };
            res.render("student/list", pagedata);
        });
    })
})


const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("server running");
})