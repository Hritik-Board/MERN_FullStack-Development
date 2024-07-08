//Hoisting

//var

// function HoistingIssue() {
//   console.log(a);
//   var a = 10;
// }

// HoistingIssue();

//using Let

// function HoistingIssue() {
//   console.log(a);
//   let a = 10;
// }

// HoistingIssue();

//const

// function HoistingIssue() {
//   console.log(a);
//   const a = 10;
// }

// HoistingIssue();

//block level

// for (var i = 0; i < 3; i++) {
//   console.log(i);
// }

// console.log(i);

// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }

// console.log(i);

//Immutabtibily

const x = 10;

x = 20;

console.log(x);
