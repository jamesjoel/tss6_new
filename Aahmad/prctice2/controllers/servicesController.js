const express = require("express");
const routes = express.Router();

routes.get("/", (req, res)=>{
    res.render("services/index");
})
routes.get("/local", (req, res)=>{
    res.render("services/index");
})
routes.get("/global", (req, res)=>{
    res.render("services/index");
})

module.exports = routes;