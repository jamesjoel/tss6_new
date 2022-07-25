const express = require("express");
const app = express();

console.log("First");
app.listen(3000, ()=>{
    console.log("Welcome");
    console.log("Second");
});


