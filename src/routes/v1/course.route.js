const courseRouter = require("express").Router();

courseRouter.get("/", (req, res) => {
  res.send("GET /course");
});

module.exports = courseRouter;
