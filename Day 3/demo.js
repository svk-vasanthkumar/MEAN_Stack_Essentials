// path module
const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(4000, () => {
  console.log("✅ Server running at http://localhost:4000");
});
