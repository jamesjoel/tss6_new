const routes = require("express").Router();

routes.get("/",(req,res)=>{
    var pagedata ={title:"GalleryPage",pagename:"Gallery/index"};
    res.render("layout",pagedata)
})
module.exports = routes;
