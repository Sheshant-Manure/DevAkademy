const mongoose = require('mongoose');
require('dotenv').config();

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
const cluster = process.env.CLUSTER;

try {
    mongoose.connect(`mongodb+srv://${ username }:${ password }@${ cluster }.mcwlaat.mongodb.net/`);
    console.log('MongoDB connected successfully');
} catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
}