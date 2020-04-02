const mongoose = require('mongoose');

const solutions = mongoose.model('solutions',{
    name: String,
    price: Number,
    description: String,
    Frequincy: String,
    power: String,
    image: String
});

module.exports=solutions;