const mongoose = require("mongoose");
require("dotenv").config();

const dbConfig = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log(process.env.MONGO_URI);
};

module.exports = dbConfig;
