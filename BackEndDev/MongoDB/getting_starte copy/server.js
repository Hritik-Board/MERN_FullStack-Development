const express = require("express");

const app = express();
const { MongoClient, ServerApiVersion } = require("mongodb");

const PORT = 5001;

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

    const database = client.db("maSynctech");
    const employees = database.collection("employees");
    // const employeesDocs = [
    //   { name: "Hritik", age: 25, department: "HR" },
    //   { name: "Rahul", age: 32, department: "finance" },
    //   { name: "Carl", age: 24, department: "IT" },
    //   { name: "David", age: 22, department: "Operations" },
    //   { name: "Eva", age: 21, department: "IT" },
    // ];

    // const result = await employees.insertMany(employeesDocs);
    // console.log(result);

    //!Querying operators
    //?gt
    // const employeesCursor = employees.find({ age: { $gt: 30 } });
    // const result = await employeesCursor.toArray();
    // console.log(result);

    //? multiple cond
    const employeesCursor = employees.find({ age: { $gt: 20, $lte: 35 } });
    const result = await employeesCursor.toArray();
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
