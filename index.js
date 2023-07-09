require("dotenv").config();
const morganDebug = require("debug")("app:morgan");
const startupDebug = require("debug")("app:startup");
const express = require("express");
const books = require("./routes/book");
const Router = express.Router();
const app = express();
const morgan = require("morgan");
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/books", books);
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.send(200, "Emmysoft");
});

/*Routes*/
if (app.get("env") === "development") {
  app.use(morgan("dev"));
  morganDebug("Morgan Enabled");
}

app.listen(PORT, () => {
  startupDebug(`Listening on port ${PORT}`);
});
