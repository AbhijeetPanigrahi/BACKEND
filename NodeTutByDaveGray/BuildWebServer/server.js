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
myEmitter.on("log", (msg, fileName) => logEvents(msg, fileName));

// myEmitter.on("log", (msg) => logEvents(msg));
// myEmitter.emit("log", "logEvent emitted");

// creating a port
const PORT = process.env.PORT || 3500;

const serveFile = async (filePath, contentType, response) => {
  try {
    const rawData = await fsPromises.readFile(
      filePath,
      !contentType.includes("image") ? "utf8" : ""
    );
    const data =
      contentType === "application/json" ? JSON.parse(rawData) : rawData;
    response.writeHead(filePath.includes("404.html") ? 404 : 200, {
      "content-type": contentType,
    });
    response.end(
      contentType === "application/json" ? JSON.stringify(data) : data
    );
  } catch (err) {
    console.log(err);
    myEmitter.emit("log", `${err.name}\t${err.message}`, "errLog.txt");
    response.statusCode = 500;
    response.end();
  }
};
//creating a minimal server
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  myEmitter.emit("log", `${req.url}\t${req.method}`, "reqLog.txt");

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
      console.log(extension);
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
      ? path.join(__dirname, "view", "index.html")
      : contentType === "text/html" && req.url.slice(-1) === "/"
      ? path.join(__dirname, "view", req.url, "index.html")
      : contentType === "text/html"
      ? path.join(__dirname, "view", req.url)
      : path.join(__dirname, req.url);

  //making the html extension (optional)
  if (!extension && req.url.slice(-1) != "/") filePath += ".html";

  const fileExists = fs.existsSync(filePath);

  if (fileExists) {
    //serve the file
    serveFile(filePath, contentType, res);
  } else {
    // 404
    // 301  (redirect)
    // console.log(path.parse(filePath));
    switch (path.parse(filePath).base) {
      case "old-page.html":
        res.writeHead(301, { location: "/new-page.html" });
        res.end();
        break;
      case "www-page.html":
        res.writeHead(301, { location: "/" });
        res.end();
        break;
      default:
        // serve a404 response
        serveFile(path.join(__dirname, "view", "404.html"), "text/html", res);
    }
  }
});

server.listen(PORT, () => console.log(`Server is working on port ${PORT}`));
