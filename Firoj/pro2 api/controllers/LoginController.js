const routes = require("express").Router();
const User = require("../models/User");
const sha1 = require("sha1");
const jwt = require("jsonwebtoken");

routes.post("/", (req, res)=>{
    // res.send(req.body);
   var e = req.body.email;
   var p = sha1(req.body.password);
   
   
    User.find({ email : e}, (err , result)=>{
      if(result.length == 1 ){
        if(result[0].password == p ){
         const token = jwt.sign({ id : result[0]._id }, "tss");

            res.send({success: true, token : token });

        }else{
            res.send({success: false , type : 2});

        }

      }else{
        res.send({success: false , type : 1});
      }
   
   
    })

})










module.exports = routes;