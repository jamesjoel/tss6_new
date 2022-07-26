const routes = require("express").Router();
const Employee = require("../models/Employee");
const City = require("../models/City");
const mongodb = require("mongodb");

routes.get("/", (req, res)=>{
    Employee.search({}, (err, result)=>{
        City.search({}, (err, city)=>{
            var pagedata = { title : "Home Page", pagename : "employee/index", result : result, city : city };
            res.render("layout", pagedata);

        })
    })
})

routes.post("/", (req, res)=>{
    // req.body.mysalary = req.body.salary;
    // delete req.body.salary;
    req.body.salary = parseInt(req.body.salary);
    Employee.save(req.body, (err)=>{
        res.redirect("/employee");
    })
})


routes.get("/delete/:id", (req, res)=>{
    var objid = mongodb.ObjectId(req.params.id);
    Employee.remove({ _id : objid }, (err)=>{
        res.redirect("/employee");
    })
})
routes.get("/edit/:id", (req, res)=>{
    var objid = mongodb.ObjectId(req.params.id);
    Employee.search({ _id : objid }, (err, result)=>{
        City.search({}, (err, city)=>{
            var pagedata = { title : "Home Page", pagename : "employee/edit", result : result[0], city : city };
            res.render("layout", pagedata);

        })
    })
})
routes.post("/update/:id", (req, res)=>{
    var objid = mongodb.ObjectId(req.params.id);
    req.body.salary = parseInt(req.body.salary);
    Employee.edit({ _id : objid }, req.body, (err)=>{
        res.redirect("/employee");
    })
    
})



module.exports = routes;