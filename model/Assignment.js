"use strict";

const mongoose = require("mongoose");
const { Schema } = mongoose;

const AssignmentSchema = new Schema({
    id: String,
    name: String,
    title: String,
    content: String,
    criteria: String,
    belongTo: String,
});

const AssignmentModel = mongoose.model('assignment', AssignmentSchema);

module.exports = AssignmentModel;
