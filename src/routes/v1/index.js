const express = require("express");

const v1Router = express.Router();

const authRouter = require("./auth.route");
const courseRouter = require("./course.route");

v1Router.use("/auth", authRouter);
v1Router.use("/courses", courseRouter);

module.exports = v1Router;
