const Product = require('../models/product');

// Create a new product
exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, category, imageUrl , categoryName } = req.body;
    const product = await Product.create({ name, description, price, category, imageUrl , categoryName});
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findOne({ productId: req.params.productId });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a product
exports.updateProduct = async (req, res) => {
  try {
    const { productId, name, description, price, category, imageUrl, categoryName } = req.body;
    
    if (!productId) {
      return res.status(400).json({ message: 'ProductId is required in the request body' });
    }

    const updatedFields = {};
    if (name) updatedFields.name = name;
    if (description) updatedFields.description = description;
    if (price) updatedFields.price = price;
    if (category) updatedFields.category = category;
    if (imageUrl) updatedFields.imageUrl = imageUrl;
    if (categoryName) updatedFields.categoryName = categoryName;

    const product = await Product.findOneAndUpdate({ productId: productId }, updatedFields, {
      new: true,
      runValidators: true,
    });
    
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    res.json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// Delete a product
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findOneAndDelete({ productId: req.params.productId });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get products by category name
exports.getProductsByCategoryName = async (req, res) => {
  const { categoryName } = req.params;
  try {
    const products = await Product.find({ categoryName });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};