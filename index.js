const mongoose = require("mongoose");
const bookModel = require("./models/book.model");

const bookSchema = mongoose.Schema({
  id: { type: "string", unique: true },
  name: { type: "string" },
  createdAt: { type: "string" },
});

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((err) => {
    console.log(`An error occured while connecting to MongoDB ${err}`);
  });

const bookModel = mongoose.model("Book", bookSchema);
