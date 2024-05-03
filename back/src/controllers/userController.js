// userController.js
const User = require('../models/user');

// Register a new user
exports.registerUser = async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const user = await User.create({ name, email, password });
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
// Get user profile
exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update user profile
exports.updateUserProfile = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.user._id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Login user
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: user._id }, 'your_secret_key', { expiresIn: '1d' });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};