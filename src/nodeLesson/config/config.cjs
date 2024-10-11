require("dotenv").config();

// to access port and url globally
const dev = {
  app: {
    port: process.env.PORT || 3000,
  },
  db: {
    url: process.env.DB_URL || "mongodb://localhost:2717/userDemoDB",
  },
};

module.exports = dev;
