const os = require('os');
const { from } = require('rxjs');

function checkSystem() {
    return new Promise((resolve, reject) => {
        const minMemorySpace = 4;
        const minNumberOfCores = 2;

        const systemMemory = os.totalmem();
        const numberOfCores = os.cpus().length;
        if (systemMemory / 1000000000 < 4) {
            reject("This app needs at least 4 GB of RAM");
        } else if (numberOfCores < 2) {
            reject("Processor is not Supported");
        } else {
            resolve("System is Checked Successfully");
        }
    });
}

from(checkSystem()).subscribe(
    info => { 
        console.log(info) },
    err => {
        console.log(err);
    }
);

console.log("Checking Your System...");
