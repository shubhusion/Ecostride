const authenticateJWT = require('../middlewares/authMiddleware'); // Import the middleware
const express = require('express');
const router = express.Router();
const { addToCart, getUserCart, updateCart, removeFromCart} = require('../controllers/cartController');

router.post('/', addToCart);
router.get('/', getUserCart);
router.put('/', updateCart);
router.delete('/:productId', removeFromCart)

module.exports = router;