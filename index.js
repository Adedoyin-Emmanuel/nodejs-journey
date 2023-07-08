require("dotenv").config();
const morganDebug = require("debug")("app:morgan");
const startupDebug = require("debug")("app:startup");
const express = require("express");
const app = express();
const morgan = require("morgan");
const PORT = process.env.PORT || 5000;

app.use(express.json());

/*Routes*/
if (app.get("env") === "development") {
  app.use(morgan("dev"));
  morganDebug("Morgan Enabled");
}

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/api/courses", (req, res) => {
  const courses = [
    {
      id: 1,
      courseName: "Intro to computer science",
    },

    {
      id: 2,
      courseName: "Javascript for dummies",
    },

    {
      id: 3, 
      courseName: "NodeJS for dummies",
    },

    {
      id: 4,
      courseName: "PHP for dummies",
    },

    {
      id: 5,
      courseName: "C for dummies",
    },
  ];
  
  return res.send(200, courses);
});

app.listen(PORT, () => {
  startupDebug(`Listening on port ${PORT}`);
});
