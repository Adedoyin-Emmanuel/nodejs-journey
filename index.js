const dotenv = require("dotenv").config();
const debug = require("debug")("app:startup");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 2800;
const helmet = require("helmet");

app.use(helmet());
app.use(express.json());

console.log(app.get("env"));
app.listen(() => {
  debug(`App Listening On PORT ${PORT}`);
});
