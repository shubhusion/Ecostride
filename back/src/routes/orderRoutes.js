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
router.post('/', authenticateJWT ,createOrder);

// Get user's orders
router.get('/', authenticateJWT , getUserOrders);

// Get a single order
router.get('/:orderId', authenticateJWT , getOrderById);

// Update an order
router.put('/:orderId', authenticateJWT , updateOrder);

module.exports = router;