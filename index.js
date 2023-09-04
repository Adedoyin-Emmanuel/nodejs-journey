const dotenv = require("dotenv").config();
const debug = require("debug")("app:startup");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 2800;
const helmet = require("helmet");
const { homeRoute, bookRoute } = require("./routes/index");

app.use(helmet());
app.use(express.json());

app.use("/", homeRoute);
app.use("/api/books", bookRoute);

app.listen(PORT, () => {
  debug(`App Listening On PORT ${PORT}`);
});
