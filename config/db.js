const mongoose = require("mongoose");
const config = require("config");

const db = config.get("mongoURI");
const connection = {};

async function connectDb() {
  // Use existing db connection
  if (connection.isConnected) {
    console.log("Using existing MongoDB connection...");
  }

  // Create new db connection
  try {
    const connect = await mongoose.connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log("Connected to MongoDB...");
    connection.isConnected = connect.connections[0].readyState;
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}

module.exports = connectDb;
