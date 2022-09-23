const routes = require("express").Router();
const Admin = require("../models/Admin");
const sha1 = require("sha1");
const jwt = require("jsonwebtoken");

routes.post("/login", (req, res)=>{
 
    
    
       var u = req.body.username;
       var p = sha1(req.body.password);
   
   
    Admin.find({ username : u}, (err , result)=>{
      if(result.length == 1 ){
        if(result[0].password == p ){
         const admintoken = jwt.sign({ id : result[0]._id }, "tss");

            res.send({success: true, token : admintoken });

        }else{
            res.send({success: false , type : 2});

        }
    
      }else{
        res.send({success: false , type : 1});
      }
    
    
    })
})


routes.get("/login", (req, res)=>{
    Admin.find({}, (err, result)=>{
        res.send(result);
    })
})










module.exports = routes;