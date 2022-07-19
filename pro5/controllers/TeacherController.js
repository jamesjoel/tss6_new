const routes = require("express").Router();

// localhost:3000/teacher
routes.get("/", (req, res)=>{
    var pagedata = { title : "Teacher Page", pagename : "teacher/index"};
    res.render("layout", pagedata);
})


module.exports = routes;