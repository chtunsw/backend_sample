"use strict";

const mongoose = require("mongoose");
const { Schema } = mongoose;

const AssignmentSchema = new Schema({
  name: String,
  title: String,
  content: String,
  criteria: String,
  belongTo: String,
  details: {
    teacher_id: mongoose.Types.ObjectId,
    name: String
  }
});

const AssignmentModel = mongoose.model('assignment', AssignmentSchema);

module.exports = AssignmentModel;
