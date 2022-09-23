   require("../config/database");
   const mongoose = require("mongoose");

   const User = mongoose.Schema({
    fullname : String,
    email : String,
    password : String,
    re_password : String,
    address : String,
    contact : String,
    gender : String,
    city : String

   }, { collection : "user"})

   module.exports = mongoose.model("user", User);
