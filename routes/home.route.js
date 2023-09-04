const express = require("express");
const router = express.Router();


router.get("/", (res, req) => {
  res.status(200).send({ message: "Welcome to the books API!" });
});

module.exports = {
  router,
};
