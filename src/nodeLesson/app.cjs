const express = require("express");
const cors = require("cors");
const app = express();
const userRouter = require("./routes/users.route.cjs");
require("./config/db.cjs");

// json readers
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// user router
app.use("/api/user", userRouter);

// global router
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
