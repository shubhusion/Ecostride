const authenticateJWT = require('../middlewares/authMiddleware'); // Import the middleware
const express = require('express');
const router = express.Router();
const { addToCart, getUserCart, updateCart } = require('../controllers/cartController');

// Add an item to the cart
router.post('/', authenticateJWT ,addToCart);

// Get the user's cart
router.get('/', authenticateJWT ,getUserCart);

// Update the cart
router.put('/', authenticateJWT ,updateCart);

module.exports = router;