const fs = require("fs");
// to make a directory or folder
// fs.mkdir("./newDir", (err) => {
//   if (err) throw err;
//   console.log("directory created");
// });

// check if the file exists or not , if not then create
if (!fs.existsSync("./newDir")) {
  fs.mkdir("./newDir", (err) => {
    if (err) throw err;
    console.log("directory created");
  });
}

// if the dir exists then remove it
if (fs.existsSync("./newDir")) {
  fs.rmdir("./newDir", (err) => {
    if (err) throw err;
    console.log("directory removed");
  });
}
