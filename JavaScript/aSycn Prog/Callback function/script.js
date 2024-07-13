//behaving as a normal function paramater . arg . varaible

//create a callback func

// function mycallback() {
//   console.log("Hello , call back here");
// }

//usage

// function logAMessage(callback) {
//   //execute the callback
//   callback();
//   console.log(callback);
// }

// //call HOF

// // logAMessage(mycallback);

// logAMessage(function () {
//   console.log("Hello , call back here");
// });

//returning a callback function method 1

// function logAMessage(callback) {
//   //execute the callback
//   const returnCall = callback();
//   console.log(returnCall);
//   // console.log(callback);
// }

// logAMessage(() => {
//   return "Hello this is a call back";
// });

//extract callback function

// function logAMessage(callback) {
//   //execute the callback
//   const returnCall = callback();
//   // console.log(returnCall);
//   return returnCall;
//   // console.log(callback);
// }

// const callcaalback = logAMessage(() => {
//   return "Hello this is a call back";
// });

// console.log(callcaalback);

//passing paramerters to the callback function

// const logMesageHOF = (callback) => {
//   const result = callback("Hritik  ", "Gupta");
//   console.log(result);
// };

// const logHOFcallbackfn = (firstName, lastName) => {
//   return `Hello, ${firstName}...${lastName}`;
// };

// //call hof

// logMesageHOF(logHOFcallbackfn);

//HOF with a parameter and call back fucntion

const calculateSumHOF = (a, b, callback) => {
  const result = a + b;
  callback(result);
};

calculateSumHOF(2, 3, (res) => {
  console.log(res);
});
