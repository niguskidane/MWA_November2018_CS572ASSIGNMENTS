const dns = require('dns');
const hostname = 'www.mum.edu';

//direct
dns.resolve4(hostname, (err, addresses) => {
    if (err) {
        console.log("Errors..:", err.message);
    }else{
    console.log("Direct: IP address:", addresses);
    }
});

//using promise
const withPromis = new Promise((resolve, reject)=>{
        dns.resolve4(hostname,(err, addresses)=>{
            if(err){
               
               reject(err.message);
            }else{
            resolve(addresses);
            }
        });
});

withPromis.then(result=>{
    console.log("Using Promise: IP address: ", result);
}).catch(err=>{
    console.log(err.message);
});

//Using AsyncAndWait
async function convertToIoAddress(name) {
    try{
        const dsnIp=await dns.resolve4(name,(err,addresses)=>{
                console.log("Using Async and Wait IP address", addresses);
        });
    }
    catch(err){
        console.log("Error ",err.message);
    }
}

convertToIoAddress(hostname);











