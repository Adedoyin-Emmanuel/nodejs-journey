const mongoose = require("mongoose");


mongoose
  .connect("mongodb://localhost/playground")
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch(err => {
    console.log(`An error occured while connecting to MongoDB ${err}`);
  });
