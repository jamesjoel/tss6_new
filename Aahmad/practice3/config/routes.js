const routes = require("express").Router();
routes.use("/",require("../controllers/HomeControllers"));
routes.use("/contact",require("../controllers/ContactControllers"));
routes.use("/about",require("../controllers/AboutControllers"));
routes.use("/project",require("../controllers/ProjectControllers"));
routes.use("/services",require("../controllers/ServicesControllers"));

module.exports=routes;
