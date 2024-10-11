const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./router/users.route.cjs");
require("./config/db.cjs");

// expresses to read json data
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extends: true }));

// users route
app.use("/api/users", userRouter);

// main/html route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/./views/index.html");
});

// handle errors
app.use((req, res, next) => {
  res.status(404).json({
    Error: "data not found",
  });
});

app.use((err, req, res, next) => {
  res.status(505).json({
    Error: "server not found",
  });
});

module.exports = app;
