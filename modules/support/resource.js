const mongoose = require('mongoose');

const resource = mongoose.model('resource',{
    name: String,
    price: Number,
    description: String,
    Frequincy: String,
    power: String,
    image: String
});

module.exports=resource;