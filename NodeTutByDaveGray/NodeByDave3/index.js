/*  
    Install npm package globally ('nodemon') by the command (npm i nodemon -g)
    Run the js file by the command (nodemon)
    Install package.json by the command (npm init)
    Install the production dependencies by the command (npm i date-fns or npm i uuid)
    To avoid publishing the node_modules (those large but needed files) create a .gitignore file then write 'node_module' there
    Installing a dev-depenecy : npm i nodemon -D
    You can change 'Script' section in package.json file
    To run the js file : npm run dev
    create an id by installing another dependency called : npm i uuid
    You can see all dependencies or packeges in 'npmjs' website
*/

//  nodemon is a dev-dependecy
//  remember we changed the 'script' section in 'package.json'
//  date-fns, uuid are the dependencies or packages (when you need you search in 'npmjs' website)

const { format } = require("date-fns");
const { v4: uuid } = require("uuid");

console.log(format(new Date(), "yyyyMMdd\tHH:mm:ss"));
console.log("hello");

console.log(uuid());
