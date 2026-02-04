// file system module
const fs = require("fs");


// Write
fs.writeFile("demo.txt", "Hello Everyone ", (err) => {
  if (err) throw err;
  console.log("File written!");
});


// Read
fs.readFile("demo.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log("File content:", data);
});
