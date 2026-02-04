// events in node js
const EventEmitter = require("events");
const emitter = new EventEmitter();

// Listener
emitter.on("greet", (name) => {
  console.log(`Hello, ${name}!`);
});

// Trigger
emitter.emit("greet", "S V K");
