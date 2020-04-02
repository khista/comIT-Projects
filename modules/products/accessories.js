const mongoose = require('mongoose');

const accessoriess = mongoose.model('accessores',{
    name: String,
    price: Number,
    description: String,
    Frequincy: String,
    power: String,
    image: String
});

module.exports=accessoriess;