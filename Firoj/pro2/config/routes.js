const express = require("express");
const routes = express.Router();


const homectrl = require("../controllers/homeController");
const aboutctrl = require("../controllers/aboutController");
// const studentctrl = require("../controllers/studentController");
// const student_listctrl = require("../controllers/student_listController");

routes.use("/", homectrl);
routes.use("/about", aboutctrl);
// routes.use("/student", studentctrl);
// routes.use("/student_list", student_listctrl);



module.exports = routes;