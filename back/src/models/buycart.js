const mongoose = require('mongoose');

const BuyCartItemSchema = new mongoose.Schema({
  productId: { type: Number, ref: 'Product', required: true },
  quantity: { type: Number, required: true, default: 1 },
  price: { type: Number, required: true },
});

const BuyCartSchema = new mongoose.Schema(
  {
    // Remove sellerId field
    items: [BuyCartItemSchema],
    totalAmount: { type: Number, required: true, default: 0 },
  },
  {
    timestamps: true,
  }
);

const BuyCart = mongoose.model('BuyCart', BuyCartSchema);

module.exports = BuyCart;
