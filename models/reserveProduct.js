const mongoose = require('mongoose')

const reserveSchema = new mongoose.Schema({
    item: [{
        type: mongoose.Schema.Types.ObjectId, ref:"products"
    }],
    Name:{
        type: String,
        required: true,
    },
    Idnumber:{
        type:Number,
    },
    PhoneNumber:{
        type: Number,
        required: true,
    },
    date:{
        type: Date,
        required: true,
    },
});

const reserveproductModel = mongoose.model("reservation", reserveSchema)
module.exports = reserveproductModel;