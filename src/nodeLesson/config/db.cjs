const mongoose = require("mongoose");
const config = require("./config.cjs");

const dbURL = config.db.url;

mongoose
  .connect(dbURL)
  .then(() => {
    console.log("db is connected");
  })
  .catch((error) => {
    console.log("db isn't connected", error.message);
    process.exit(1);
  });
