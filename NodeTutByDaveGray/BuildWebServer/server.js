const http = require("http"); // all 4 are common core modules
const fs = require("fs");
const path = require("path");
const fsPromises = require("fs").promises;

const logEvents = require("./logEvents"); // custome module
const EventEmitter = require("events");
// const { setTimeout } = require("timers/promises");

// logEvents("logEvent emitted");

class Emitter extends EventEmitter {}

// intialize object
const myEmitter = new Emitter();

// myEmitter.on("log", (msg) => logEvents(msg));
// myEmitter.emit("log", "logEvent emitted");

// creating a port
const PORT = process.env.PORT || 3500;
//creating a minimal server
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  const extension = path.extname(req.url);

  let contentType;

  //------------------->    Setting the content-type

  switch (extension) {
    case ".css":
      contentType = "text/css";
      break;
    case ".js":
      contentType = "text/javascript";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".jpg":
      contentType = "image/jpeg";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".txt":
      contentType = "text/plain";
      break;
    default:
      contentType = "text/html";
  }

  // ------------------->    Setting the file-path

  let filePath =
    contentType === "text/html" && req.url === "/"
      ? path.join(__dirname, "views", "index.html")
      : contentType === "text/html" && req.url.slice(-1) === "/"
      ? path.join(__dirname, "views", req.url, "index.html")
      : contentType === "text/html"
      ? path.join(__dirname, "views", req.url)
      : path.join(__dirname, req.url);

  //making the html extension (optional)
  if (!extension && req.url.slice(-1) != "/") filePath += ".html";

  const fileExists = fs.existsSync(filePath);

  if (fileExists) {
    //serve the file
  } else {
    // 404
    // 301  (redirect)
  }
});
server.listen(PORT, () => console.log(`Server is working on port ${PORT}`));
