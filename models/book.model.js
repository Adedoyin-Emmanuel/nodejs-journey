const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },

  genre: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  datePublished: {
    type: Date,
    default: Date.now,
  },

  ratings: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },

      review: {
        type: String,
        maxLength: 500,
      },
    },
  ],

  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = bookModel;
