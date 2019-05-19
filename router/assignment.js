'use strict';

const Router = require("express").Router;
const router = Router();

const singleGet = require("../controller/assignment/single/get");
const singleCreate = require("../controller/assignment/single/create");
const singleUpdate = require("../controller/assignment/single/update");
const singleDelete = require("../controller/assignment/single/delete");

const bulkGet = require("../controller/assignment/bulk/get");

// single assignment restful apis
router.get("/assignment/:id", singleGet);
router.post("/assignment", singleCreate);
router.put("/assignment/:id", singleUpdate);
router.delete("/assignment/:id", singleDelete);

// bulk assignment restful apis
router.get("/bulk/assignment/:ids", bulkGet);

module.exports = router;
