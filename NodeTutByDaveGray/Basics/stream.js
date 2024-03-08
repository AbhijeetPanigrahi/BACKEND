const fs = require("fs");
//  ReadStream for large files
const rs = fs.ReadStream("./lorem.txt", { encoding: "utf8" });
const ws = fs.WriteStream("./new-lorem.txt");
//  Stream data listener
// rs.on("data", (DataChunk) => {
//   ws.write(DataChunk);
// });
//  or we can just write this  (piping data stream)
rs.pipe(ws);
