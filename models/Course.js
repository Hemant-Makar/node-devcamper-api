const mongoose = require("mongoose");
const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add a course title"],
    trim: true,
    maxlength: [100, "Course title can not be more than 100 characters"],
  },
  description: {
    type: String,
    required: [true, "Please add a course description"],
    maxLength: [
      1000,
      "Course description can not be more than 1000 characters",
    ],
  },
  weeks: {
    type: String,
    required: [true, "Please add number of weeks"],
  },
  tuition: {
    type: Number,
    required: [true, "Please add a tuition cost"],
  },
  minimumSkill: {
    type: String,
    required: [true, "Please add minimum skills"],
    enum: ["beginner", "intermediate", "advanced"],
  },
  scholarshipAvailable: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  bootcamp: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Bootcamp",
    required: true,
  },
});

module.exports = mongoose.model("Course", CourseSchema);
