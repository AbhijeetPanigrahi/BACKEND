const fs = require("fs");
//  Asynchronously reads the entire contents of a file.
fs.readFile("./write.txt", (err, data) => {
  if (err) throw err;
  console.log(data);
  console.log(data.toString());
});
/*  const read = fs.readFileSync("./write.txt");
    console.log("the content is :" + read);         */

// exit on uncaught errors
process.on("uncaughtException", (err) => {
  console.error(`there  was an uncaught error : ${err} `);
  process.exit(1);
});
// ---> there  was an uncaught error : Error: ENOENT: no such file or directory, open 'C:\Users\DELL\Desktop\BACKEND\NodeTutByDev\wrte.txt'

// // we can write the path like this also
const path = require("path");
fs.readFile(path.join(__dirname, "write.txt"), (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});

// now let's write file
fs.writeFile(
  path.join(__dirname, "letsWrite.txt"),
  "Hello I created it !",
  (err) => {
    if (err) throw err;
    console.log("operation completed");

    // now let's update file's content
    fs.appendFile(
      path.join(__dirname, "letsWrite.txt"),
      "\n\n This is the updated one",
      (err) => {
        if (err) throw err;
        console.log("File Updated");

        // now lets rename the file
        fs.rename(
          path.join(__dirname, "letsWrite.txt"),
          path.join(__dirname, "Renamed_one.txt"),
          (err) => {
            if (err) throw err;
            console.log("File Renamed");
          }
        );
      }
    );
  }
); // This is called 'callback hell'

// How to avoid 'callback hell' , see in index_1.js
