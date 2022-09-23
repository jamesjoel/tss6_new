const MongoClient = require("mongodb").MongoClient;

routes.post("/", (req, res)=>{
    
   Teacher.insert(req.body, (err)=>{

   })
})

// database.js
module.exports = (cb)=>{
    MongoClient.connect("mongodb://localhost:27017", cb);
}



// Teacher.js (model)
module.exports.insert = (obj, cb)=>{
    database((err, con)=>{ 
        var db = con.db("dbname");
        db.collection("col").insertOne(obj, cb)
    })
}

