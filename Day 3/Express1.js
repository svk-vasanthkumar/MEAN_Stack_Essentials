const express = require("express");
const app = express();
app.get("/api/user", (req, res) => {
res.json({
name: "S V K",
role: "Student",
skill: "Node.js"
});
});
app.listen(3000, () => {
console.log("API server started");
});