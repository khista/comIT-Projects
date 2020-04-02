const mongoose = require('mongoose');

const fieldSurvey = mongoose.model('fieldSurvey',{
    name: String,
    price: Number,
    description: String,
    Frequincy: String,
    power: String,
    image: String
});

module.exports=fieldSurvey;