const express = require("express");
const routes = express.Router();

routes.get("/", (req, res)=>{
    res.render("about/index");
})
routes.get("/info", (req, res)=>{
    res.render("about/index");
})
routes.get("/info/more", (req, res)=>{
    res.render("about/index");
})
routes.get("/me", (req, res)=>{
    res.render("about/index");
})

module.exports = routes;