"use strict";

const Router = require("express").Router;
const Assignment = require("./model/Assignment");
const uuidv4 = require('uuid/v4');
const router = Router();

router.get("/", (req, res, next) => {
    res.send("Hello!");
});

router.get("/assignment/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        if (id === "id456") {
            res.statusCode = 404;
            res.send({
                msg: "not found!"
            });
        } else {
            const result = await Assignment.find({ id });
            res.send(result);
        }
    } catch (e) {
        next(e);
    }
});

router.post("/assignment", async (req, res, next) => {
    try {
        const { body } = req;
        body.id = uuidv4();
        const assignment = new Assignment(body);
        await assignment.save();
        res.statusCode = 201;
        res.send({
            msg: 'assignment created succeed!'
        });
    } catch (e) {
        res.statusCode = 500;
        res.send({
            msg: 'assignment created failed!'
        });
        next(e);
    }
});

module.exports = router;
