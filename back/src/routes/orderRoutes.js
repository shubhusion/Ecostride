const express = require('express');
const router = express.Router();
const {
  createOrder,
  getUserOrders,
  getOrderById,
  updateOrder,
} = require('../controllers/orderController');

// Create a new order
router.post('/', createOrder);

// Get user's orders
router.get('/', getUserOrders);

// Get a single order
router.get('/:id', getOrderById);

// Update an order
router.put('/:id', updateOrder);

module.exports = router;