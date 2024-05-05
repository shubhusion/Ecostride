const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const cors =require('cors')
const userRoutes = require('./routes/userRoutes');
const activityRoutes = require('./routes/activityLogRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const cartRoutes = require('./routes/cartRoutes');
// const authRoutes = require('./routes/auth');
// Load environment variables from .env file
dotenv.config({ path: path.join(__dirname, '.env') });


// Connect to MongoDB
connectDB();



const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/api/users', userRoutes);
app.use('/api/activity', activityRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/product', productRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/cart', cartRoutes);
// Other server configuration and routes...

// app.use('/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});