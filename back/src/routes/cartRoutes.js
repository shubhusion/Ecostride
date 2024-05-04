const express = require('express');
const router = express.Router();
const { addToCart, getUserCart, updateCart } = require('../controllers/cartController');

// Add an item to the cart
router.post('/', addToCart);

// Get the user's cart
router.get('/', getUserCart);

// Update the cart
router.put('/', updateCart);

module.exports = router;