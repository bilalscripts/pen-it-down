const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = () => {
  try {
    mongoose
      .connect(process.env.DATABASE, {
        useNewUrlParser: true,

        useUnifiedTopology: true,
      })
      .then(() => console.log("connected to mongodb"))
      .catch((err) => console.log(err.message));
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDB;