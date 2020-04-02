const downloads= require('../modules/support/download');
const trainings = require('../modules/support/trainings');
const fieldSurvey=require('../modules/support/fieldSurvey');
const resource=require('../modules/support/resource');
const onlines=require('../modules/support/onlineSupport');


const supports= async function(req,res){
    const download=await downloads.find().exec();
    const training=await trainings.find().exec();
    const fieldSurveys=await fieldSurvey.find().exec();
    const resources=await resource.find().exec();
    const onliness=await onlines.find().exec();

    res.render('support',{download,training,fieldSurveys,resources,onliness})
}

module.exports=supports;