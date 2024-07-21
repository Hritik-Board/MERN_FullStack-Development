const express = require("express");

//create isngtancfe of express

const userRouter = express.Router();

//Using the route method

//Getting all users

userRouter.route("/").get((req, res) => {
  res.json({
    message: "All users are fetched",
  });
});

//Handle a specific user id

userRouter
  .route("/:id")
  .get((req, res) => {
    res.json({
      message: "One user fetched",
    });
  })
  .put((req, res) => {
    res.json({
      message: "One user updated",
    });
  })
  .delete((req, res) => {
    res.json({
      message: "One user deleted",
    });
  });

module.exports = userRouter;
