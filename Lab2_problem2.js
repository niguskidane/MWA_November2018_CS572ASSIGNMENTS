// Fisrt Approch 
(function(){
    'use strict'
    Array.prototype.even=function(){
        process.nextTick(()=>{console.log(this.filter((number)=>number%2==0))});
    }
    Array.prototype.odd=function(){
        setImmediate(()=>{console.log(this.filter((number)=>number%2!==0));});
    }
    
    console.log('Start');
    [1,2,3,4,5,6,7,8].even();
    [1,2,3,4,5,6,7,8].odd();
    console.log('End');
})();

