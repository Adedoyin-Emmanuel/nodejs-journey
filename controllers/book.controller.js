const Joi = require("joi");
const { Book } = require("./../models/");
const { response } = require("./../config/");
const { appDebug, dbDebug } = require("./../config/");

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
      return response(
        res,
        201,
        "Books created successfully",
        bookCreationResult
      );
    } catch (error) {
      response(res, 500, `Failed to create book`);
      dbDebug(error);
    }
  }

  static async getAll(req, res) {
    try {
      const books = await Book.find();
      return response(res, 200, "Books fetched successfully", books);
    } catch (error) {
      response(res, 500, "Failed to get books");
      dbDebug(error);
    }
  }

  static async getById(req, res) {
    try {
      const { id } = req.params;

      const idSchema = Joi.object({
        id: Joi.string().required(),
      });

      const { error, value } = idSchema.validate({ id });

      if (error) return response(res, 400, error.details[0].message);

      await Book.findById(value.id)
        .exec()
        .then((book) => {
          return response(res, 200, "Book fetched successfully", book);
        })
        .catch((error) => {
          dbDebug(error);
          return response(res, 404, "Book not found");
        });
    } catch (error) {
      response(res, 500, "Could not fetch book");
      return dbDebug(error);
    }
  }

  static async delete(req, res) {
    appDebug(req);
    response(res, 200, "Book deleted successfully");
  }

  static async update(req, res) {
   appDebug(req);
    response(res, 200, "Book updated successfully");
  }
}

module.exports = BookController;
