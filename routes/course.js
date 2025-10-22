const express = require("express");
const route = express.Router();
const { getCourses, getCourse } = require("../controllers/courses");

route.route("/").get(getCourses);
route.route("/:id").get(getCourse);

module.exports = route;
