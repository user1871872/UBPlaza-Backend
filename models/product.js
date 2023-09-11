const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    image:{
        type:String,
    },
    title:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    stock:{
        type: Number,
        required: true,
    },
});

const productModel = mongoose.model("products", productSchema)
module.exports = productModel;