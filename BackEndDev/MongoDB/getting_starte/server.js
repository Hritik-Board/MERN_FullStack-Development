const express = require("express");

const app = express();
const { MongoClient, ServerApiVersion } = require("mongodb");

const PORT = 5000;

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

    // // Insert multiple documents
    // const insertResult = await students.insertMany([
    //   {
    //     name: "Hritik",
    //     age: 20,
    //     subjects: ["Maths", "physics"],
    //   },
    //   {
    //     name: "Chirag",
    //     age: 30,
    //     subjects: ["Chemistry", "physics"],
    //   },
    // ]);
    // console.log("Documents inserted:", insertResult.insertedCount);

    // Find and log all documents in the collection
    // const resultCursor = students.find();
    // const results1 = await resultCursor.toArray();
    // console.log("All students:", results1);

    // const results2 = await students.updateOne(
    //   {
    //     name: "Hritik", //filter
    //   },
    //   {
    //     $set: { age: 50 },
    //   }
    // );
    // console.log(results2);

    // const results2 = await students.updateMany(
    //   {
    //     age: 30, //filter
    //   },
    //   {
    //     $set: { subjects: ["Biology"] },
    //   }
    // );
    // console.log(results2);

    // const result = await students.deleteOne({
    //   name: "Chirag",
    // });

    // const result = await students.deleteMany({
    //   name: "Chirag",
    // });

    const result = await students.findOneAndDelete({
      age: 50,
    });
    console.log(result);
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
