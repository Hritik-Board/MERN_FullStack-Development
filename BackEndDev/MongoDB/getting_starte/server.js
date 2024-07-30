const express = require("express");

const app = express();
const { MongoClient, ServerApiVersion } = require("mongodb");

const PORT = 5000;

// Connect to mongoDB
// 1. Create client
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

//username : hritikgupta326
//pas : p6wFVOBAqS3G4YxQ
//Connection string : mongodb+srv://hritikgupta326:p6wFVOBAqS3G4YxQ@learningpurpose.6a8b1wu.mongodb.net/students-database
// Function to connect
const ConnectDB = async () => {
  try {
    // Example code that might throw an error
    await client.connect();
    console.log("MongoDB connected");

    //? Data base name
    const database = client.db("maSynctech");
    //? creating the collections
    const students = database.collection("books");
    //?Documents
    // const result = await students.insertOne({
    //   name: "Hritik",
    //   age: 20,
    //   subjects: ["Maths", "physics"],
    // });

    //!Insert many
    const result = await students.insertMany([
      {
        name: "Hritik",
        age: 20,
        subjects: ["Maths", "physics"],
      },
      {
        name: "Chirag",
        age: 30,
        subjects: ["Chemistry", "physics"],
      },
    ]);
    console.log(result);
  } catch (error) {
    // Handling the error
    console.error("An error occurred:", error.message);
  }
};

// Call the function
ConnectDB();

app.listen(PORT, () => {
  console.log(`server is live on ${PORT}`);
});
