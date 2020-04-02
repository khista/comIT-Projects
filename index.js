//npm modules
    const express = require('express');
    const app = express();
    var bodyParser = require('body-parser')
    const port =3000;

//connection to database
    const connection=require('./connectionDB/dbCon');
    connection(); 

//using pug engine
    app.set('view engine','pug');

//public assets
    app.use(express.static('public'));

//body-parser services
//var urlencodedParser = (bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.urlencoded({ extended: false }));

//all gets required path
    const homePage = require('./route/home');
    const products = require('./route/product');
    const services=require('./route/services');
    const supports=require('./route/support');
    const contacts=require('./route/contact');

//admin require path for gets
const adminget =require('./route/admin/adminget');
const adminWirelessFrom=require('./route/admin/getWireless');
const adminLanSwitchFrom=require('./route/admin/getLanSwtich');
const adminAccessories = require('./route/admin/getAccessories');
const adminComputers = require('./route/admin/getComputers');
const adminInstalls=require('./route/admin/getInstallForm');
const adminConfigures=require('./route/admin/getConfigurForm');
const adminInternet=require('./route/admin/getInternet');
const adminWebSites=require('./route/admin/getWebForm');
const adminSolutions=require('./route/admin/getSolutionForm');
const adminDownalods=require('./route/admin/getDownloadForm');
const adminTrainings=require('./route/admin/getTrainingForm');
const adminFieldSurveys=require('./route/admin/getFieldSurvey');
const adminResource=require('./route/admin/getResourcesForm');
const adminOnlines = require('./route/admin/getOnlineSuportForm');
 
//admin require path for post
const adminPostWireless = require('./route/admin/post/postWireless');

//all gets routes
    app.get('/',homePage);
    app.get('/product',products);
    app.get('/services',services);
    app.get('/support',supports);
    app.get('/contact',contacts);

//admin routes for gets
    app.get('/admin',adminget);
    app.get('/getWirelessForm',adminWirelessFrom);
    app.get('/getLanSwitchForm',adminLanSwitchFrom);
    app.get('/accessoriessForm',adminAccessories);
    app.get('/computerForm',adminComputers);
    app.get('/installationForm',adminInstalls);
    app.get('/configForm',adminConfigures);
    app.get('/internetForm',adminInternet);
    app.get('/websiteForm',adminWebSites);
    app.get('/solutionsForm',adminSolutions);
    app.get('/downloadForm',adminDownalods);
    app.get('/TrainingForm',adminTrainings);
    app.get('/FeildSurveyForm',adminFieldSurveys);
    app.get('/resourcesForm',adminResource);
    app.get('/onlineSuport',adminOnlines);

//admin routes for post
    app.post('/admin/getWirelessForm',adminPostWireless);

//Server listening and on port 
    app.listen(port,function(errr){
        if(errr){
            console.log('The System loading error check the server first and run again!!!');
        }
        console.log('System running on port '+port);
    });
