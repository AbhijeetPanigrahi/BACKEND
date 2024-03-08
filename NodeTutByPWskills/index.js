/*
    let add = require("./myModule");


    console.log(typeof add);
    console.log(add(5,4));

*/
/* 
    after creating the 2nd module named "prd" in myModule.js if we
    run this then the add(5,4) will show 20 i.e 5*4
*/

let operations = require("./myModule")
console.log(typeof operations);
console.log(operations.add(4,5));
console.log(operations.prd(4,5));

