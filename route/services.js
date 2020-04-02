const installDevi =require('../modules/servicess/installation');
const configDevice=require('../modules/servicess/configuration');
const internetConn =require('../modules/servicess/internet');
const websiteDev=require('../modules/servicess/website');
const solutionProv=require('../modules/servicess/solution');


const services = async function(req,res){
const installService=await installDevi.find().exec();
const configuration=await configDevice.find().exec();
const internet=await internetConn.find().exec();
const websit=await websiteDev.find().exec();
const solutions=await solutionProv.find().exec();

    res.render('services', {installService,configuration,internet,websit,solutions});
}




module.exports=services;