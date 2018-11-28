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
// Second Approch (Not Efficent)
// (function(){
//     'use strict'
//     function even(numbers){
//         let result=[];
//         let j=0;
//        for(let i=0; i<numbers.length;i++){
//             if(numbers[i]%2===0){
//                 result[j]=numbers[i];
//                 j++;
//             }
//        }
//        return result;
//     }
    
//     function odd(numbers){
//         let result=[];
//         let j=0;
//        for(let i=0; i<numbers.length;i++){
//             if(numbers[i]%2!==0){
//                 result[j]=numbers[i];
//                 j++;
//             }
//        }
//        return result;
//     }
    
//     let num=[1,2,3,4,5,6,7,8];
    
//     console.log('Start');
//     process.nextTick(()=>{
//         console.log(even(num));
//     });
//     setImmediate(()=>{
//         console.log(odd(num));
//     });
//     console.log('End');
    
// })();
