const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    orderId: { type: Number, required: true, unique: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    products: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
      },
    ],
    totalAmount: { type: Number, required: true },
    status: { type: String, required: true, default: 'pending' },
    shippingAddress: { type: String, required: true },
    paymentMethod: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

orderSchema.pre('save', async function (next) {
  const order = this;
  if (!order.isNew) {
    return next();
  }
  try {
    const maxOrderId = await Order.findOne().sort('-orderId').select('orderId').lean();
    order.orderId = (maxOrderId && maxOrderId.orderId || 0) + 1;
    next();
  } catch (error) {
    next(error);
  }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
