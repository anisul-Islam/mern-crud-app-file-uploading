require("dotenv").config();
const dev = {
  db: {
    url: process.env.DB_URL || "mongodb://127.0.0.1:27017/CRUD-DB",
  },
  app: {
    port: process.env.SERVER_PORT || 3002,
  },
};

module.exports = dev;
