const mongoose = require('mongoose');

// Connection URL with database name
const connectionString = 'mongodb://localhost:27017/sustainable-tracker';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(connectionString, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;