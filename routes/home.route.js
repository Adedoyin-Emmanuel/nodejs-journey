const express = require("express");
const router = express.Router();

router.get("/", (res, req, next) => {
  res.status(200).send({ message: "Welcome to the books API!" });
  next();
});
