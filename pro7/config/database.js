const MongoClient = require("mongodb").MongoClient;

module.exports = (cb)=>{
    MongoClient.connect("mongodb://localhost:27017", cb);
}