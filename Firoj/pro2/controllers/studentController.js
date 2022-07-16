const express = require("express");
const routes = express.Router();


routes.get("/", (req , res)=>{

    res.render("student/index");
})






module.exports = routes;