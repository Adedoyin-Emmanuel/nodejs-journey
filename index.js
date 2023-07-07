const startupDebugger = require("debug")("app:startup");
const express = require("express");
const app = express();
const morgan = require("morgan");
const PORT = process.env.PORT || 5000;

app.use(express.json());

/*Routes*/

if (app.get("env") === "development") {
  app.use(morgan("dev"));
  startupDebugger("hello world");
}

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
