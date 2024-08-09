const asyncHandler = require("express-async-handler");
const User = require("../model/User");
const bcrypt = require("bcryptjs");

//! User Registration

const userController = {
  //!Register
  register: asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    //!validate
    if (!username || !password) {
      throw new Error("Please all fields are required");
    }

    //!check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      throw new Error("User already exists");
    }

    //!Hash save password bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //!create the user and save into db
    const userCreated = await User.create({
      email,
      username,
      password: hashedPassword,
    });

    //! send the response

    res.json({
      username: userCreated.username,
      email: userCreated.email,
      id: userCreated._id,
    });
  }),
  //!Login
  //!profile
};

module.exports = userController;
