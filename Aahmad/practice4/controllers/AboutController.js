const routes = require("express").Router();

routes.get("/",(req,res)=>{
    var pagedata ={title:"AboutPage",pagename:"About/index"};
    res.render("layout",pagedata)
})
module.exports = routes;