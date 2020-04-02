//products 
const wirelessDevice=require('../../modules/products/Wireless');
const lanDevice=require('../../modules/products/lan');
const accessDevice=require('../../modules/products/Wireless');
const computersDevice=require('../../modules/products/computers');

//service
const installDevi =require('../../modules/servicess/installation');
const configDevice=require('../../modules/servicess/configuration');
const internetConn =require('../../modules/servicess/internet');
const websiteDev=require('../../modules/servicess/website');
const solutionProv=require('../../modules/servicess/solution');

//supports
const downloads= require('../../modules/support/download');
const trainings = require('../../modules/support/trainings');
const fieldSurvey=require('../../modules/support/fieldSurvey');
const resource=require('../../modules/support/resource');
const onlines=require('../../modules/support/onlineSupport');

const adminget= async function(req,res){
    //products
    const wirless= await wirelessDevice.find().exec();
    const lan = await lanDevice.find().exec();
    const accessory=await accessDevice.find().exec();
    const computer=await computersDevice.find().exec();
    //services
    const installService=await installDevi.find().exec();
    const configuration=await configDevice.find().exec();
    const internet=await internetConn.find().exec();
    const websit=await websiteDev.find().exec();
    const solutions=await solutionProv.find().exec();
    //supports
    const download=await downloads.find().exec();
    const training=await trainings.find().exec();
    const fieldSurveys=await fieldSurvey.find().exec();
    const resources=await resource.find().exec();
    const onliness=await onlines.find().exec();


 res.render('admin/adminget',{wirless,lan,accessory,computer,installService,configuration,internet,websit,solutions,download,training,fieldSurveys,resources,onliness});
}

module.exports=adminget;