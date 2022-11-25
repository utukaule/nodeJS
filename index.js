const express = require('express');
const mongoose = require('mongoose');
const mongodb = require('mongodb');

const app = express();

const main = async () => {
    await mongoose.connect('mongodb://localhost:27017/e-com');
    // Schemas
    const ProductSchema = new mongoose.Schema({
        name: String,
        price: Number,
    });

    //Model
    const ProductsModel = mongoose.model('products',ProductSchema)
    
    // if we have to enter new data we have to use instance
    let data = new ProductsModel({name:"oppo v9",price:1000})
    let result = await data.save()
    console.log(result);
}
main()