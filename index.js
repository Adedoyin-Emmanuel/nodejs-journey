require("dotenv").config();
const debug = require("debug")("app:startup");
const PORT = process.env.PORT || 2800;
const helmet = require("helmet");
const { homeRoute, bookRoute } = require("./routes/index");
const express = require("express");
const app = express();

app.use(helmet());
app.use(express.json());

app.use("/api/books", bookRoute);
app.use("/", homeRoute);

app.listen(PORT, () => {
  debug(`App Listening On PORT ${PORT}`);
});
