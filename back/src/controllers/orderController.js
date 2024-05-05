const Order = require('../models/order');
const Cart = require('../models/cart');
const shortid = require('shortid');
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types; // Destructure ObjectId from mongoose.Types

exports.createOrder = async (req, res) => {
  try {
    const { shippingAddress, paymentMethod } = req.body;
    const cart = await Cart.findOne({ userId: req.user._id });

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: 'Cart is empty' });
    }

    const products = cart.items.map((item) => ({
      productId: item.productId,
      quantity: item.quantity,
      price: item.price,
    }));

    const totalAmount = cart.totalAmount;

    console.log("Creating order with data:", {
      userId: req.user._id,
      products,
      totalAmount,
      shippingAddress,
      paymentMethod,
    });

    const orderData = {
      userId: req.user._id,
      products,
      totalAmount,
      shippingAddress,
      paymentMethod,
    };

    // Set validateBeforeSave option to false to bypass validation
    const order = await Order.create(orderData);

    await Cart.findOneAndUpdate(
      { userId: req.user._id },
      { $set: { items: [], totalAmount: 0 } }
    );

    res.status(201).json(order);
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(400).json({ message: error.message });
  }
};
// Get user's orders
exports.getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user._id });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single order by orderId
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findOne({ orderId: req.params.orderId });
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an order
exports.updateOrder = async (req, res) => {
  try {
    const order = await Order.findOneAndUpdate({ orderId: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
