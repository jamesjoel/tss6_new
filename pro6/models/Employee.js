const database = require("../config/database");
const collName = "employee";

module.exports.search = (cb)=>{
   database((err, con)=>{
        var db = con.db("tss5_30");
        db.collection(collName).find().toArray(cb);
   }) 
}

module.exports.remove = ()=>{
    database((err, con)=>{
        var db = con.db("tss5_30");
    })
}
module.exports.edit = ()=>{
    database((err, con)=>{
        var db = con.db("tss5_30");
    })
}
module.exports.save = ()=>{
    database((err, con)=>{
        var db = con.db("tss5_30");
    })
}



/*
database((err, con)=>{
        
});*/
