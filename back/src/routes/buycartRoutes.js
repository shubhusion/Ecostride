const express = require('express');
const router = express.Router();
const {addToBuyCart , removeFromBuyCart , getUserBuyCart , updateBuyCart} = require('../controllers/buycartController');

// Add an item to the buy cart
router.post('/', addToBuyCart);

// Remove an item from the buy cart
router.delete('/remove/:productId', removeFromBuyCart);

// Get the user's buy cart
router.get('/', getUserBuyCart);

// Update the buy cart
router.put('/update', updateBuyCart);

module.exports = router;
