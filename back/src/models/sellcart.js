const mongoose = require('mongoose');

const sellCartItemSchema = new mongoose.Schema({
  productId: { type: Number, ref: 'Product', required: true },
  quantity: { type: Number, required: true, default: 1 },
  price: { type: Number, required: true },
});

const sellCartSchema = new mongoose.Schema(
  {
    sellerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [sellCartItemSchema],
    totalAmount: { type: Number, required: true, default: 0 },
  },
  {
    timestamps: true,
  }
);

const SellCart = mongoose.model('SellCart', sellCartSchema);

module.exports = SellCart;
