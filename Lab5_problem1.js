const express = require('express');
//const logger=require('morgan');
//const path=require('path');
const {from}=require('rxjs');
const cookieParser=require('cookie-parser');
const bodyParser=require('body-parser');
const app=express();

//we need to install axios
// and import axios module
const axios=require('axios');
const port = process.env.PORT || 2000;
const jsonurl='https://randomuser.me/api/?results=10';


app.enable('trust proxy');
app.set('strict routing',true);
app.set('x-powered-by',false);
app.use(bodyParser.json());
app.use(cookieParser());

//get the data
function getJsonData(url){
    return axios.get(url);
}

//using promise
app.get('/users', (req,res)=>{
    getJsonData(jsonurl)
    .then(response=>{
        res.json(response.data);
    })
    .catch(err=>{
        console.log("Error", err.message);
        res.end(err.message);
    });
   
});

//using Reactive programming (Observable)
app.get('/rxjs/users', (req,res)=>{
    from(getJsonData(jsonurl))
        .subscribe(
            response=>res.json(response.data),
            err=>res.end(error.message)
        );
});

//using async and wait 
app.get('/async/users',async function (req,res){
try{
    const myData=await getJsonData(jsonurl);
    res.json(myData.data);
    res.end();
}
catch (err){
    console.log("Error", err.message);
}

});

app.listen(port,()=>{
    console.log(`The server is running on port: ${port}`);
});



