const routes = require("express").Router();
const mongodb = require("mongodb");
const MongoClient = require("mongodb").MongoClient;
const dbUrl = "mongodb://localhost:27017";
const dbName = "tss5_30";
const collName = "teacher";
// localhost:3000/teacher
routes.get("/", (req, res)=>{
    MongoClient.connect(dbUrl, (err, con)=>{
        var db = con.db(dbName);
        db.collection(collName).find().toArray((err, result)=>{

            var pagedata = { title : "Teacher Page", pagename : "teacher/index", result : result };
            res.render("layout", pagedata);
        })
    })
})

routes.post("/add", (req, res)=>{
    // console.log(req.body);
    req.body.salary = parseInt(req.body.salary);
    MongoClient.connect(dbUrl, (err, con)=>{
        var db = con.db(dbName);
        db.collection(collName).insertOne(req.body, (err)=>{
            res.redirect("/teacher");
        })
    })


})

routes.get("/detail/:a", (req, res)=>{
    // console.log(req.params.a);
    var id = mongodb.ObjectId(req.params.a);
    MongoClient.connect(dbUrl, (err, con)=>{
        var db = con.db(dbName);
        db.collection(collName).find({ _id : id }).toArray((err, result)=>{
            console.log(result);
            var pagedata = { pagename : "teacher/detail", title : "Detail", result : result[0] };
            res.render("layout", pagedata);
        })
    })

    
})

// routes.get("/demo/:a/:b/:c", (req, res)=>{
//     console.log(req.params.a);
//     console.log(req.params.b);
//     console.log(req.params.c);
// })

routes.get("/delete/:a", (req, res)=>{
    var id = mongodb.ObjectId(req.params.a);
    MongoClient.connect(dbUrl, (err, con)=>{
        var db = con.db(dbName);
        db.collection(collName).find({ _id : id }).toArray((err, result)=>{
            if(err){
                console.log(err, "------- Teacher Find Error");
                return;
            }
            db.collection("teacher_trash").insertOne(result[0], (err)=>{
                    if(err){
                        console.log(err, "-------- Teacher Trash Insert Error");
                        return;
                    }
                    db.collection(collName).deleteMany({ _id : id }, (err)=>{
                        if(err){
                            console.log(err, "-------- Teacher Delete Error");
                            return;
                        }
                        res.redirect("/teacher");
                });

            })
        })
    })
})

module.exports = routes;