const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
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

router.get("/", (req, res) => {
  res.status(200).json(books);
});

module.exports = {
  router,
};
