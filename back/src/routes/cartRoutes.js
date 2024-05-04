const authenticateJWT = require('../middlewares/authMiddleware'); // Import the middleware
const express = require('express');
const router = express.Router();
const { addToCart, getUserCart, updateCart, removeFromCart} = require('../controllers/cartController');

router.post('/', authenticateJWT ,addToCart);
router.get('/', authenticateJWT ,getUserCart);
router.put('/', authenticateJWT ,updateCart);
router.delete('/:productId', authenticateJWT , removeFromCart)

module.exports = router;