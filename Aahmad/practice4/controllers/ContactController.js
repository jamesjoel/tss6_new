const routes = require("express").Router();

routes.get("/",(req,res)=>{
    var pagedata ={title:"ContactPage",pagename:"Contact/index"};
    res.render("layout",pagedata)
})
module.exports = routes;