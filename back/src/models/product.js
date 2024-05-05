const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    productId: { type: Number, unique: true}, // Use productId as primary identifier
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    categoryName: { type: String , required: true},
    categoryId: { type: Number }, // Store categoryId instead of ObjectId
    imageUrl: { type: String, required: true },
    inStock: { type: Boolean, required: true, default: true },
  },
  {
    timestamps: true,
  }
);

// Add a virtual property to populate the category
productSchema.virtual('category', {
  ref: 'Category',
  localField: 'categoryId',
  foreignField: 'categoryId',
  justOne: true
});

// Auto-increment productId
productSchema.pre('save', async function(next) {
  const product = this;
  if (!product.isNew) {
    return next();
  }
  try {
    const maxProductId = await Product.findOne().sort('-productId').select('productId').lean();
    product.productId = (maxProductId && maxProductId.productId || 0) + 1;
    next();
  } catch (error) {
    next(error);
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
