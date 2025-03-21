const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const session = require('express-session');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');
const serviceRoutes = require('./services/siteQueryEmail');
const buyerRoutes = require('./routes/buyerAuth');
const sellerRoutes = require('./routes/sellerAuth');
const menuItemRoutes = require('./routes/menuRoutes');
const orderRoutes = require('./routes/orderRoutes');
const orderStatsRoutes = require('./routes/orderStats');
const feedbackRoutes = require('./routes/feedbackRoutes');
const sellerStatusRoutes = require('./routes/sellerStatus');

require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;

// Session middleware
app.use(session({
  secret: process.env.JWT_SECRET_KEY,  
  resave: false,
  saveUninitialized: true,
  // cookie: { secure: false }
}));

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());

// CORS configuration
app.use(cors({
  origin: 'https://good-food-frontend.vercel.app',
  methods: 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
  credentials: true 
}));

// Handle preflight requests for all routes
app.options('*', cors());

// API Routes
app.use('/api/service', serviceRoutes);
app.use('/api/buyerAuth', buyerRoutes);
app.use('/api/sellerAuth', sellerRoutes);
app.use('/api/menu', menuItemRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/seller', orderStatsRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/seller/status', sellerStatusRoutes);

// Error handling middleware
app.use(errorHandler);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
