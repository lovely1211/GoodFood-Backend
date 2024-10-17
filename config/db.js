// config/db.js
// df0vvXezxf0vLGp9

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(
'mongodb+srv://lovely1211zmn:df0vvXezxf0vLGp9@clustergoodfood.6pm1d.mongodb.net/?retryWrites=true&w=majority&appName=ClusterGoodFood'
        );

        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
};

module.exports = connectDB;
