const routes = require("express").Router();

routes.get("/",(req,res)=>{
    var pagedata ={title:"HomePage",pagename:"Home/index"};
    res.render("layout",pagedata)
})

module.exports = routes;