const mongoose = require('mongoose');

const install = mongoose.model('install',{
    name: String,
    price: Number,
    description: String,
    Frequincy: String,
    power: String,
    image: String
});

module.exports=install;