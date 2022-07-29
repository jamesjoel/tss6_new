const database = require("../config/database");
const collName = "employee";

module.exports.search = (where, cb)=>{
   database((err, con)=>{
        var db = con.db("tss5_30");
        db.collection(collName).find(where).toArray(cb);
   }) 
}

module.exports.remove = (where, cb)=>{
    database((err, con)=>{
        var db = con.db("tss5_30");
        db.collection(collName).deleteMany(where, cb);
    })
}
module.exports.edit = (where, obj, cb)=>{
    database((err, con)=>{
        var db = con.db("tss5_30");
        db.collection(collName).updateMany(where, { $set : obj }, cb);
    })
}
module.exports.save = (obj, cb)=>{
    database((err, con)=>{
        var db = con.db("tss5_30");
        db.collection(collName).insertOne(obj, cb);
    })
}



/*
database((err, con)=>{
        
});*/
