const routes = require("express").Router();


routes.use("/", require("../controllers/HomeController"));
routes.use("/teacher", require("../controllers/TeacherController"));
routes.use("/contact", require("../controllers/ContactController"));

module.exports = routes;