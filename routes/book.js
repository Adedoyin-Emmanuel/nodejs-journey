const express = require("express");
const Router = express.Router();

Router.use((req, res, next) => {
  next();
});

const books = [
  {
    id: 1,
    name: "HTML5 for beginners",
  },

  {
    id: 2,
    name: "Javascript for beginners",
  },

  {
    id: 3,
    name: "PHP for beginners",
  },

  {
    id: 4,
    name: "C++ for dummies",
  },

  {
    id: 5,
    name: "Java for babies",
  },
];

Router.get("/", (req, res) => {
  res.json(200, "Hello from books endpoint");
});

module.exports = Router;
