const mongoose = require('mongoose');

const internet = mongoose.model('internet',{
    name: String,
    price: Number,
    description: String,
    Frequincy: String,
    power: String,
    image: String
});

module.exports=internet;