const express = require("express");
const app = express();

app.use(express.json()); // Middleware to parse JSON body

let users = [];

// GET - Fetch users
app.get("/users", (req, res) => {
  res.json(users);
});

// POST - Add user
app.post("/users", (req, res) => {
  users.push(req.body);
  res.json({ message: "User added", users });
});

app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
