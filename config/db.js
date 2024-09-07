// config/db.js  YPpQLujLH6Cd9PFj

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL || 'mongodb+srv://lovely1211zmn:<YPpQLujLH6Cd9PFj>@clusterfood.ai8f5.mongodb.net/?retryWrites=true&w=majority&appName=ClusterFood');
        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
};

module.exports = connectDB;
