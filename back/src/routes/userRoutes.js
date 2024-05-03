const express = require('express');
const router = express.Router();
const { registerUser, getUserProfile, updateUserProfile } = require('../controllers/userController');

// Register a new user
router.post('/register', registerUser);

// Get user profile
router.get('/profile', getUserProfile);

// Update user profile
router.put('/profile', updateUserProfile);

module.exports = router;