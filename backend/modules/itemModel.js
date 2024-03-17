const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({   
    itemId:{
        type:Number,
        required:true
    },   
    itemName:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }
});

module.exports = mongoose.model('Item', itemSchema);
