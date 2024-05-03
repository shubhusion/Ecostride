// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilePicture: String,
  joinedDate: { type: Date, default: Date.now },
  goals: [
    {
      category: String,
      goal: String,
      targetValue: Number,
      startDate: Date,
      endDate: Date,
      currentValue: Number,
      completed: Boolean,
    },
  ],
});

module.exports = mongoose.model('User', userSchema);