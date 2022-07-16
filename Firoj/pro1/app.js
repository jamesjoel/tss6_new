const express = require("express");
const app = express();

const MongoClient = require("mongodb").MongoClient;

app.use(express.static(__dirname+"/assets"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded());

// app.post("/student/submit" , (req, res)=>{
//     console.log(req.body);
    
//     res.redirect("/student_list");
// })
app.post("/student/submit" , (req, res)=>{
    req.body.age = parseInt(req.body.age);
    req.body.number = parseInt(req.body.number);
    console.log(req.body);

    MongoClient.connect("mongodb://localhost:27017" , (err , con)=>{
        if(err){
            console.log(err);
            return;
        }

        var db = con.db("tss1");
        db.collection("student").insertOne(req.body, (err)=>{
            // console.log("data saved");
            res.redirect("/student_list");
        });
    });

})

app.get("/", (req, res)=>{
    res.render("home/index");
})

app.get("/home", (req, res)=>{
    res.render("index/index");
})

app.get("/about", (req, res)=>{
    res.render("about/index");
})

app.get("/student", (req, res)=>{
    res.render("student/index");
})

app.get("/student_list", (req, res)=>{
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("tss1");
        db.collection("student").find().toArray((err, result)=>{
            // console.log(result);
            var pagedata = { result : result};
            res.render("studentlist/index", pagedata);
        });
    })

})




const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("your server is running---");
})