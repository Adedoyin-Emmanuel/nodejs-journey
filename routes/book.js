const express = require("express");
const Router = express.Router();

Router.use((req, res, next) => {
  next();
});
Router.get("/", (req, res) => {
  res.json(200, "Hello from books endpoint");
});

module.exports = Router;
