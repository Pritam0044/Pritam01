const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema =  new mongoose.Schema({

    userId:{
        type:ObjectId,
        ref: "Users" 
    },
    productId: {
        type:ObjectId,
        ref:"Products"},
    amount:Number,
    isFreeAppUser:Boolean,
    date: String

},{timestamp: true})

module.exports = mongoose.model('OrderDetails',orderSchema)