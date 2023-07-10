require("dotenv").config();
const morganDebug = require("debug")("app:morgan");
const startupDebug = require("debug")("app:startup");
const express = require("express");
const app = express();
const morgan = require("morgan");
const PORT = process.env.PORT || 5000;
const helmet = require("helmet");

const books = require("./routes/book");

/* MIDDLEWARE */
app.use(helmet);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
(app.get("env") == "development") & app.use(morgan("dev"));


app.get("/", (req, res) => {
  res.status(200).send({ name: "Testing API", message: "Welcome :)" });
});

app.use("/api/books", books);




app.listen(PORT, () => {
  startupDebug(`Listening on port ${PORT}`);
});
