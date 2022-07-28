const fs = require("fs");
const rand = require("uniqider");

module.exports.fileCreate = (data, cb)=>{

    var name = rand();
    

    fs.writeFile(__dirname+"/files/"+name+".txt", data, cb);
}