const express = require('express');
const router = express.Router();
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  getProductsByCategoryName
} = require('../controllers/productController');

// Create a new product
router.post('/', createProduct);

// Get all products
router.get('/', getAllProducts);

// Get a single product
router.get('/:productId', getProductById);

// Update a product
router.put('/:productId', updateProduct);

// Delete a product
router.delete('/:productId', deleteProduct);

// Get products by category name
router.get('/find/:categoryName', getProductsByCategoryName);

module.exports = router;