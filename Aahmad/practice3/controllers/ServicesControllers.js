const routes = require("express").Router();
routes.get("/",(req,res)=>{
    var pagedata = {title:"Services",pagename:"services/index"};
    res.render("layout",pagedata);
})
module.exports = routes;