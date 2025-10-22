const mongoose = require("mongoose");
const errorHandler = require("../middleware/error");
const asyncHandler = require("../middleware/async");

const User = require("../models/User");

exports.register = asyncHandler(async (req, res, next) => {
  res.status(201).json({ success: true, msg: "Register User" });
});
