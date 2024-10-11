const mongoose = require("mongoose");
const config = require("./config.cjs");

const dbUrl = config.db.url;

// connect with mongoose
mongoose
  .connect(dbUrl)
  .then(() => console.log("db is connected"))
  .catch(() => {
    console.log("db isn't connected", error.message).process.exit(1);
  });
