// We can use async await to avoid callback hell

const fsPromises = require("fs").promises;
// const { log } = require("console");
const path = require("path");

const fileOps = async () => {
  try {
    // read file
    const data = await fsPromises.readFile(
      path.join(__dirname, "write_1.txt"),
      "utf8"
    );
    console.log(data);

    // write file
    await fsPromises.writeFile(
      path.join(__dirname, "write_1.txt"),
      "Ao.. sunau pyar ki ek kahani"
    );

    // update file
    await fsPromises.appendFile(
      path.join(__dirname, "write_1.txt"),
      "\n Aaa dekhe zaraa"
    );

    // rename file
    await fsPromises.rename(
      path.join(__dirname, "write_1.txt"),
      path.join(__dirname, "promiseWrite.txt")
    );

    // delete fie
    /*     await fsPromises.unlink(path.join(__dirname, "forDel.txt"));  */
  } catch (err) {
    console.log(err);
  }
};
fileOps();
