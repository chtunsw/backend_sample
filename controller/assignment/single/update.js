"use strict";

const Assignment = require("../../../model/Assignment");
const mongoose = require("mongoose");

module.exports = async (req, res, next) => {
  try {
    const { body } = req;
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.statusCode = 400;
      res.send({
        msg: "id is invalid!"
      });
    } else {
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
      const result = await Assignment.findOne({
        _id: new mongoose.Types.ObjectId(id)
      });
      if (result) {
        Object.assign(result, body);
        const assign = new Assignment(result);
        await assign.save();
        res.statusCode = 200;
        res.send({
          msg: 'updated succeed!',
          id: assign._id
        });
      } else {
        Object.assign(body, { _id: new mongoose.Types.ObjectId(id) });
        const assign = new Assignment(body);
        await assign.save();
        res.statusCode = 201;
        res.send({
          msg: 'created succeed!',
          id: assign._id
        });
      }
    }
  } catch (e) {
    res.statusCode = 500;
    res.send({
      msg: "assignment update failed!"
    });
    next(e);
  }
};
