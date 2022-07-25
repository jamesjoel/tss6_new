const routes = require("express").Router();

routes.use("/",require("../controllers/HomeController"));
routes.use("/about",require("../controllers/AboutController"));
routes.use("/teacher",require("../controllers/TeacherController"));
routes.use("/contact",require("../controllers/ContactController"));
routes.use("/gallery",require("../controllers/GalleryController"));

module.exports = routes;

