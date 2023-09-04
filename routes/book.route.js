const express = require("express");
const router = express.Router();
const { BookController } = require("./../controllers/");

/*getting all books */
router.get("/", (req, res) => {
  BookController.getAll(req, res);
});

/*getting books by id*/
router.get("/:id", (req, res) => {
  BookController.getById(req, res);
});

/*creating a new book*/
router.post("/", (req, res) => {
  BookController.create(req, res);
});

/*updating a book*/
router.put("/:id", (req, res) => {
  BookController.update(req, res);
});

/*deleting a book*/
router.delete("/:id", (req, res) => {
  BookController.delete(req, res);
});

module.exports = router;
