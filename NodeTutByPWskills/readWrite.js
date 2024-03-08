// read from an external file
const fs = require('fs')

console.log(typeof fs);     // object

// read in the sync way
console.log("first line");
const content = fs.readFileSync("hello.txt")
console.log("the content is" +content);
console.log("last line");
console.log("...................")

// read in the async way

console.log("first line");
// the async part:
fs.readFile("hello.txt", (err, content) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("your content is: " + content)
    }
})
console.log("last line");

// automatically create and write in that file

fs.writeFileSync("writeFile.txt", "Heloo guys...this is we created a text file");
