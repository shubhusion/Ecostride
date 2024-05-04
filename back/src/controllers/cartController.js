const Cart = require('../models/cart');

// Add an item to the cart
exports.addToCart = async (req, res) => {
  try {
    const { productId, quantity, price } = req.body;
    let cart = await Cart.findOne({ userId: req.user._id });

    if (!cart) {
      cart = await Cart.create({
        userId: req.user._id,
        items: [{ productId, quantity, price }],
        totalAmount: price * quantity,
      });
    } else {
      const existingItemIndex = cart.items.findIndex(
        (item) => item.productId.toString() === productId
      );

      if (existingItemIndex !== -1) {
        cart.items[existingItemIndex].quantity += quantity;
        cart.items[existingItemIndex].price = price;
      } else {
        cart.items.push({ productId, quantity, price });
      }

      cart.totalAmount += price * quantity;
      await cart.save();
    }

    res.json(cart);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get the user's cart
exports.getUserCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user._id }).populate('items.productId');
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update the cart
exports.updateCart = async (req, res) => {
  try {
    const { items } = req.body;
    const cart = await Cart.findOneAndUpdate(
      { userId: req.user._id },
      { items, totalAmount: calculateTotalAmount(items) },
      { new: true }
    );
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    res.json(cart);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Helper function to calculate the total amount
const calculateTotalAmount = (items) => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};