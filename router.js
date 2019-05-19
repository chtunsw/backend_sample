"use strict";

const Router = require("express").Router;
const router = Router();

router.get("/", (req, res, next) => {
  res.redirect("/docs");
});

const assignmentRouter = require('./router/assignment.js')
router.use(assignmentRouter)

module.exports = router;
