const routes = require("express").Router();


routes.use("/", require("../controllers/HomeController"));
routes.use("/employee", require("../controllers/EmployeeController"));
routes.use("/city", require("../controllers/CityController"));


module.exports = routes;