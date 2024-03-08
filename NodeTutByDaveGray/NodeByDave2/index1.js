const logEvents = require("./logEvents");
const EventEmitter = require("events");
// const { setTimeout } = require("timers/promises");

// logEvents("logEvent emitted");

class MyEmitter extends EventEmitter {}

// intialize object
const myEmitter = new MyEmitter();

// add listener for the log event
myEmitter.on("log", (msg) => logEvents(msg));

setTimeout(() => {
  // emit event
  myEmitter.emit("log", "logEvent emitted");
}, 2000);
