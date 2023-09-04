const Joi = require("joi");
const { Book } = require("./../models/");
const { response } = require("./../config/");

class BookController {
  static async create(req, res) {
    try {
      const joiBookSchema = Joi.object({
        title: Joi.string().max(100).required(),
        author: Joi.string().max(25).required(),
        genre: Joi.string().max(50).required(),
        description: Joi.string().max(500).required(),
        price: Joi.number().required(),
      });

      const { error, value } = joiBookSchema.validate(req.body);
      if (error) {
        return response(res, 400, error.details[0].message);
      }

      //store the book in the database and return a response
      const bookCreationResult = await Book.create(value);
      return response(res, 201, "Books created successfully", bookCreationResult);
    } catch (error) {
      response(res, 500, `Failed to create book`);
      console.log(error);
    }
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
