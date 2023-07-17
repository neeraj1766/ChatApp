const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB connected : ${conn.connection.host}`.bgGreen);
  } catch (error) {
    console.log(`Error: ${error.message}`.bgRed);
    process.exit();
  }
};

module.exports = connectDB;
