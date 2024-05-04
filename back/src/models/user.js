// models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
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

// Define a pre-save middleware to generate and increment the id field, and hash the password
userSchema.pre('save', async function (next) {
  try {
    // Hash the password if it's modified or new
    if (this.isModified('password') || this.isNew) {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
    }

    // Generate and increment the id if the document is newly created
    if (this.isNew) {
      const highestIdUser = await this.constructor.findOne({}, 'id').sort({ id: -1 });
      this.id = highestIdUser ? highestIdUser.id + 1 : 1;
    }

    next();
  } catch (error) {
    next(error);
  }
});

// Method to check password after hashing
userSchema.methods.checkPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
