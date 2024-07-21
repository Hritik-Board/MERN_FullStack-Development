const express = require("express");
const userRouter = require("./routes/usersRouter");

const app = express();

const PORT = 8082;

//Home Route

app.get("/", (req, res) => {
  res.json({
    message: "welcome tot he app",
  });
});

//USERS ROUTE

app.use("/users", userRouter);

app.listen(PORT, console.log(`Server is running on ${PORT}`));
