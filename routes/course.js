const express = require("express");
const route = express.Router();
const {
  getCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/courses");

route.route("/").get(getCourses);
route.route("/:id").get(getCourse).delete(deleteCourse).put(updateCourse);
route.route("/bootcamps/:bootcampId/courses").post(createCourse);

module.exports = route;
