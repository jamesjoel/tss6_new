const routes = require("express").Router();

const City = require("../models/City");


routes.get("/", (req, res)=>{
  City.distinct((err, result)=>{

      var pagedata = { title : "Home Page", pagename : "city/index", state : result, city : [] };
      res.render("layout", pagedata);
  })

})


routes.post("/", (req, res)=>{
    City.distinct((err, result)=>{  
  
    City.search({ state : req.body.state }, (err, city)=>{
        var pagedata = { title : "Home Page", pagename : "city/index", state : result, city : city };
        res.render("layout", pagedata);
        })
    });
})


module.exports = routes;