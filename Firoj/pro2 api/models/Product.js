require("../config/database");
const mongoose = require("mongoose");

const Product = mongoose.Schema({
 name : String,
 price : String,
 discount : String,
 category : String,
 discription : String,
 image : String
 
})

module.exports = mongoose.model("product", Product);
