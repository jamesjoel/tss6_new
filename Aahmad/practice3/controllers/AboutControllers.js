const routes = require("express").Router();
routes.get("/",(req,res)=>{
    var pagedata = {title:"About",pagename:"about/index"};
    res.render("layout",pagedata);
})
module.exports = routes;