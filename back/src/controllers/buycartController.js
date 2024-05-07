const BuyCart = require('../models/buycart');
const Product = require('../models/product');

// Add an item to the buy cart
exports.addToBuyCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    // Find the product by productId
    const product = await Product.findOne({ productId });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    const price = product.price;
    let buyCart = await BuyCart.findOne({});
    if (!buyCart) {
      buyCart = await BuyCart.create({
        items: [{ productId, quantity, price }],
        totalAmount: price * quantity,
      });
    } else {
      const existingItemIndex = buyCart.items.findIndex(
        (item) => item.productId.toString() === productId
      );
      if (existingItemIndex !== -1) {
        buyCart.items[existingItemIndex].quantity += quantity;
      } else {
        buyCart.items.push({ productId, quantity, price });
      }
      buyCart.totalAmount += price * quantity;
      await buyCart.save();
    }
    res.json(buyCart);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Remove an item from the buy cart
exports.removeFromBuyCart = async (req, res) => {
  try {
    const { productId } = req.params;
    const buyCart = await BuyCart.findOne({});
    if (!buyCart) {
      return res.status(404).json({ message: 'Buy Cart not found' });
    }
    const itemIndex = buyCart.items.findIndex(
      (item) => item.productId.toString() === productId
    );
    if (itemIndex === -1) {
      return res.status(404).json({ message: 'Item not found in buy cart' });
    }
    const product = await Product.findOne({ productId });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    const itemPrice = product.price;
    const itemQuantity = buyCart.items[itemIndex].quantity;
    buyCart.totalAmount -= itemPrice * itemQuantity;
    buyCart.items.splice(itemIndex, 1);
    await buyCart.save();
    res.json(buyCart);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get the user's buy cart
exports.getUserBuyCart = async (req, res) => {
  try {
    const buyCart = await BuyCart.findOne({});
    if (!buyCart) {
      return res.status(404).json({ message: 'Buy Cart not found' });
    }
    res.json(buyCart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update the buy cart
exports.updateBuyCart = async (req, res) => {
  try {
    const { items } = req.body;
    const buyCart = await BuyCart.findOneAndUpdate(
      {},
      { items, totalAmount: calculateTotalAmount(items) },
      { new: true }
    );
    if (!buyCart) {
      return res.status(404).json({ message: 'Buy Cart not found' });
    }
    res.json(buyCart);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Helper function to calculate the total amount
const calculateTotalAmount = (items) => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};
