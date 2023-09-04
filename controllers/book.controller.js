const joi = require("joi");
const { Book } = require("./../models/");
const { response } = require("./../config/");

class BookController {
  static async create(req, res) {
    console.log(req);
    response(res, 200, "Books created successfully");
  }

  static async getAll(req, res) {
    console.log(req);
    response(res, 200, "All books fetched successfully");
  }
  static async delete(req, res) {
    console.log(req);
    response(res, 200, "Book deleted successfully");
  }

  static async update(req, res) {
    console.log(req);
    response(res, 200, "Book updated successfully");
  }

  static async getById(req, res) {
    console.log(req);
    response(res, 200, "Book fetched successfully");
  }
}

module.exports = BookController;
