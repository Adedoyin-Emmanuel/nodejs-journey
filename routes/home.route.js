const express = require("express");
const router = express.Router();
const { response } = require("./../config/");

router.get("/", (req, res, next) => {
  response(res, 200, "Welcome to the books API 🚀");
  next();
});

module.exports = router;
