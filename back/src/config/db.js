const mongoose = require('mongoose');

// Connection URL with database name
const connectionString = 'mongodb://127.0.0.1:27017/sustainable-tracker';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
