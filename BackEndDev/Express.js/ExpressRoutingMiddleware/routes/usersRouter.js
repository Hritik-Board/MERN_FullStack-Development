const express = require("express");

//create isngtancfe of express

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.json({
    message: "All users are fetched",
  });
});

userRouter.get("/:id", (req, res) => {
  res.json({
    message: "One user fetched",
  });
});

userRouter.put("/:id", (req, res) => {
  res.json({
    message: "One user updated",
  });
});

userRouter.delete("/:id", (req, res) => {
  res.json({
    message: "One user deleted",
  });
});

module.exports = userRouter;
