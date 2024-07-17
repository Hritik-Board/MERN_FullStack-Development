// wys to expirting modules in CJS

//!Single funtio export
//! Object export
//! Named funct eportr
//!using export shothand

//?single function export

// const name = "Hritk";

// console.log("App started");

// module.exports = name;

//?object export

// module.exports = {
//   add: function (a, b) {
//     return a + b;
//   },
//   subtract: function (a, b) {
//     return a - b;
//   },
// };

//?Named function export

// module.exports.sayHello = (name) => {
//   console.log(`Hi there ${name}`);
// };

// module.exports.sayBye = (name) => {
//   console.log(`Bye ${name}`);
// };

//?using export shothand

exports.sayHello = (name) => {
  console.log(`Hi there ${name}`);
};

exports.sayBye = (name) => {
  console.log(`Bye ${name}`);
};
