const routes = require("express").Router();
const Employee = require("../models/Employee");

routes.get("/", (req, res)=>{
    Employee.search((err, result)=>{

        var pagedata = { title : "Home Page", pagename : "employee/index", result : result };
        res.render("layout", pagedata);
    })
})


module.exports = routes;