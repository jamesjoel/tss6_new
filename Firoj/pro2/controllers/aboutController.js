const express = require("express");
const routes = express.Router();

routes.get("/", (req , res)=>{

    res.render("about/index");
})






module.exports = routes;