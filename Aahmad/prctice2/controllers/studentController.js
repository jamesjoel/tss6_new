const express = require("express");
const routes = express.Router();
const MongoClient = require("mongodb").MongoClient;
const dbUrl = "mongodb://localhost:27017";
const dbName = "tss5_30";
const collName = "student";


routes.get("/", (req, res)=>{
    res.render("student/index");
})

routes.post("/add", (req, res)=>{
    req.body.age = parseInt(req.body.age);
    MongoClient.connect(dbUrl, (err, con)=>{
        var db = con.db(dbName);
        db.collection(collName).insertOne(req.body, (err)=>{
            res.redirect("/student/list");
        })
    })
})

routes.get("/list", (req, res)=>{
    MongoClient.connect(dbUrl, (err, con)=>{
        var db = con.db(dbName);
        db.collection(collName).find().toArray((err, result)=>{
            var pagedata = { result : result };
            res.render("student/list", pagedata);
        })
    })
})

module.exports = routes;