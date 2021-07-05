const express = require("express");
const usersRouter = express.Router();
const datasUser = require("../db/index");

usersRouter.get("/:limit", (req, res, next) => {
  const limit = req.params.limit;
  const data = datasUser.slice(0, limit);
  res.status(202).json(data);
});

usersRouter.get("/", (req, res, next) => {
  res.status(202).json(datasUser);
});

usersRouter.get("/", (req, res, next) => {
  res.send("hello this is Users");
});

module.exports = usersRouter;
