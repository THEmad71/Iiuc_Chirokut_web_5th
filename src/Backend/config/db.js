const { MongoClient } = require('mongodb');

// Replace <username>, <password>, <dbname>, and <cluster> with your details
const uri = "mongodb+srv://amaduddinosama:<Amad123>@cluster0.etykz.mongodb.net/";

const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas!");

    // Example: Access a specific database
    const database = client.db("<dbname>");
    return database;
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error);
  }
}

module.exports = { connectToDatabase, client };
