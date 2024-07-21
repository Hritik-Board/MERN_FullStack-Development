// Mimic Auth

const isAuth = (req, res, next) => {
  const isLogin = false;
  if (isLogin) {
    next();
  } else {
    res.json({
      message: "UnAuthorised",
    });
  }
};

module.exports = isAuth;
