const path = require("path");

const filePath = "/user/local/index.html";

console.log("Directory:", path.dirname(filePath));
console.log("File Name:", path.basename(filePath));
console.log("Extension:", path.extname(filePath));
console.log("Joined Path:", path.join(__dirname, "files", "data.txt"));
