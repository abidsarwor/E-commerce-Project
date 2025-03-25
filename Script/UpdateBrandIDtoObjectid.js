const mongoose = require('mongoose');
const Product = require('../models/Product');
require('dotenv').config();

// DB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Update Script
async function updateBrandIDs() {
    const products = await Product.find({});

    for (let product of products) {
        if (typeof product.brandID === 'string') {
            product.brandID = mongoose.Types.ObjectId(product.brandID);
            await product.save();
            console.log(`Updated Product ID: ${product._id}`);
        }
    }
    console.log('All brandID updated successfully.');
    process.exit();
}

updateBrandIDs();