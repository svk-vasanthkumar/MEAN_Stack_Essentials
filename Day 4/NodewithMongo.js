const { MongoClient } = require("mongodb");
// MongoDB connection URL and DB name
const url = "mongodb://127.0.0.1:27017";
const dbName = "mydb";

async function main() {
  const client = new MongoClient(url);

  try {
    // Connect
    await client.connect();
    console.log("✅ Connected to MongoDB");

    const db = client.db(dbName);
    const users = db.collection("users");

    // Insert a user
    await users.insertOne({ name: "Alice", age: 22 });
    console.log("User inserted");

    // Read all users
    const allUsers = await users.find().toArray();
    console.log("Users:", allUsers);

  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

main();

