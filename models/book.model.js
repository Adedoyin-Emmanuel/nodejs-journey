const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  id: { type: "string", unique: true },
  name: { type: "string" },
  author: { type: "string" },
  createdAt: { type: "datetime", default: new Date.now() },
});

const bookModel = mongoose.model("Book", bookSchema);

module.exports = {
  bookModel,
};
