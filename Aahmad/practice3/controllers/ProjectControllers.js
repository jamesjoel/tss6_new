const routes = require("express").Router();
const mongodb = require("mongodb");
const MongoClient = require("mongodb").MongoClient;
const dbUrl = "mongodb://localhost:27017";
const dbName = "tss5_30";
const collName = "sample";

routes.get("/",(req,res)=>{
    MongoClient.connect(dbUrl,(err,con)=>{
        var db = con.db(dbName);
        db.collection(collName).find().toArray((err,result)=>{
            var pagedata = {title : "Project page", pagename : "project/index", result : result};
            res.render("layout", pagedata);
        })
    })
})
routes.post("/add",(req,res)=>{
    req.body.Amount = parseInt(req.body.Amount)
    MongoClient.connect(dbUrl,(err,con)=>{
        var db = con.db(dbName);
        db.collection(collName).insertOne(req.body,(err)=>{
            res.redirect("/project");
           
        })
    })
})

routes.get("/detail/:a",(req,res)=>{
    var id = mongodb.ObjectId(req.params.a);
    MongoClient.connect(dbUrl,(err,con)=>{
        var db = con.db(dbName);
        db.collection(collName).find({_id : id}).toArray((err,result)=>{
            console.log(result);
            var pagedata = {title : "Project page", pagename : "project/detail", result : result[0]};
            res.render("layout", pagedata);
        })
    })
})
module.exports = routes;