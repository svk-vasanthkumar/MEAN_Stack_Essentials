const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");

const app = express();
app.use(express.json());
app.use(express.static("public"));

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

let db;

async function connectDB() {
  await client.connect();
  db = client.db("busBookingDB");
  console.log("MongoDB Connected ✅");
}

connectDB();

app.post("/book", async (req, res) => {
  const ticket = req.body;
  await db.collection("tickets").insertOne(ticket);
  res.send({ message: "Ticket saved in DB" });
});

app.get("/tickets", async (req, res) => {
  const tickets = await db.collection("tickets").find().toArray();
  res.send(tickets);
});

/* DELETE TICKET */
app.delete("/tickets/:id", async (req, res) => {
  const id = req.params.id;

  await db.collection("tickets").deleteOne({
    _id: new ObjectId(id)
  });

  res.json({ message: "Ticket cancelled successfully" });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
