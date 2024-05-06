const express = require('express');
const router = express.Router();
const {
  createOrder,
  getUserOrders,
  getOrderById,
  updateOrder,
} = require('../controllers/orderController');
const authenticateJWT = require('../middlewares/authMiddleware'); // Import the middleware
// Create a new order
router.post('/', createOrder);

// Get user's orders
router.get('/', getUserOrders);

// Get a single order
router.get('/:orderId', getOrderById);

// Update an order
router.put('/:orderId', updateOrder);

module.exports = router;