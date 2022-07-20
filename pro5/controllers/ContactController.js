const routes = require("express").Router();

routes.get("/", (req, res)=>{
    var pagedata = { title : "Contact", pagename : "contact/index"};
    res.render("layout", pagedata);
})

module.exports = routes;