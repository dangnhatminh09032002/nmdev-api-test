const express = require("express");
const usersRouter = express.Router();
const datasUser = require("../db/index");
const pool = require("../db/index");

usersRouter.get("/", (req, res, next) => {
  const data = [];
	pool.query('SELECT * FROM accounts', (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows);
		return;
  });
});

usersRouter.get("/", (req, res, next) => {
  res.send("hello this is Users");
});

module.exports = usersRouter;
