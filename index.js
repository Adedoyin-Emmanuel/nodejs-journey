require("dotenv").config();
const debug = require("debug")("app:startup");
const dbDebug = require("debug")("app:db");
const PORT = process.env.PORT || 2800;
const helmet = require("helmet");
const morgan = require("morgan");
const { homeRoute, bookRoute } = require("./routes/index");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

app.use("/", homeRoute);
app.use("/api/books", bookRoute);

app.listen(PORT, () => {
  debug(`App Listening On PORT ${PORT}`);
  mongoose
    .connect(process.env.LOCAL_MONGODB_URL)
    .then(() => {
      dbDebug("Connected to Mongodb");
    })
    .catch((error) => dbDebug(`Couldn't connect to Mongodb ${error}`));
});
