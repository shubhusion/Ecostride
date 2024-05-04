const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  categoryId: { type: Number, unique: true },
  name: { type: String, required: true },
  description: { type: String }
});

categorySchema.pre('save', async function (next) {
  const category = this;
  if (!category.isNew) {
    return next();
  }
  try {
    const maxCategoryId = await Category.findOne().sort('-categoryId').select('categoryId').lean();
    category.categoryId = (maxCategoryId && maxCategoryId.categoryId || 0) + 1;
    next();
  } catch (error) {
    next(error);
  }
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
