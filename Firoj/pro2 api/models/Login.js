require("../config/database");

const mongoose = require("mongoose");

const Login = mongoose.Schema({

         email : String,
         password : String
         
},{ collection : "user"});
module.exports = mongoose.model("user", Login);