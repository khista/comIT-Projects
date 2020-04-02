const mongoose = require('mongoose');

const trainings = mongoose.model('trainings',{
    name: String,
    price: Number,
    description: String,
    Frequincy: String,
    power: String,
    image: String
});

module.exports=trainings;