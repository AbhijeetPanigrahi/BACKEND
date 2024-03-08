//  How node js is different from vanila js
//  1. Node runs on a server not in a browser (Backend not frontend)
//  2. The console is terminal window
console.log("hello node");
//  3. Global object instead of window object
// console.log(global);
//  4. CommonJS modules instead of es6 modules
//  5. Missing some JS APIs like fetch
const os = require("os");
const path = require("path");

console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log(__dirname);
console.log(__filename);

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));

//  export and import b/w two files
const math = require("./Math");
console.log(math.add(2, 4));
//  we can destructuring also
/*
    const { add, sub, div, sub } = require("./Math");
    console.log(add(2, 8));
*/
