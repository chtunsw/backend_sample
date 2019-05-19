"use strict";

const Assignment = require("../../../model/Assignment");
const mongoose = require("mongoose");

module.exports = async (req, res, next) => {
  try {
    const { body } = req;
    if (body.details && body.details.teacher_id) {
      if (!mongoose.Types.ObjectId.isValid(body.details.teacher_id)) {
        res.statusCode = 400;
        res.send({
          msg: "body.details.teacher_id is invalid!"
        });
        return;
      } else {
        body.details.teacher_id = new mongoose.Types.ObjectId(
          body.details.teacher_id
        );
      }
    }
    const assignment = new Assignment(body);
    await assignment.save();
    res.statusCode = 201;
    res.send({
      msg: "created succeed!",
      id: assignment._id
    });
  } catch (e) {
    res.statusCode = 500;
    res.send({
      msg: "assignment created failed!"
    });
    next(e);
  }
};
