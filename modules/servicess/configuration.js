const mongoose = require('mongoose');

const config = mongoose.model('config',{
    name: String,
    price: Number,
    description: String,
    Frequincy: String,
    power: String,
    image: String
});

module.exports=config;