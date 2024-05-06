// userRoute.js
const express = require('express');
const router = express.Router();
const authenticateJWT = require('../middlewares/authMiddleware'); // Import the middleware
const { registerUser, loginUser, getUserProfile, updateUserProfile } = require('../controllers/userController');

// Register a new user
router.post('/register', registerUser);

// Login user
router.post('/login', loginUser);

// Get user profile
router.get('/profile', getUserProfile); // Apply the middleware

// Update user profile
router.put('/profile', updateUserProfile); // Apply the middleware

module.exports = router;
