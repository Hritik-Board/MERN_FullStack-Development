const express = require("express");

const app = express();
const { MongoClient, ServerApiVersion } = require("mongodb");

const PORT = 9000;

// MongoDB connection string and credentials
const client = new MongoClient(
  "mongodb+srv://hritikgupta326:p6wFVOBAqS3G4YxQ@learningpurpose.6a8b1wu.mongodb.net/students-database",
  {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  }
);

// Function to connect to MongoDB and perform operations
const ConnectDB = async () => {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log("MongoDB connected");

    // Select the database and collection
    const database = client.db("maSynctech");
    const students = database.collection("students");
  } catch (error) {
    // Handle any errors that occur during connection or operations
    console.error("An error occurred:", error.message);
  } finally {
    // Close the connection to MongoDB
    await client.close();
  }
};

// Call the function to connect to MongoDB and perform operations
ConnectDB();

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is live on ${PORT}`);
});
