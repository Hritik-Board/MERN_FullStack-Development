// // example 1 with callback

// //creation
// function simplecallback(success, cb) {
//   console.log("callback called");
//   if (success) {
//     cb(null, "The operation was successfull");
//   } else {
//     "The operation failed", null;
//   }
// }

// //usage

// simplecallback(true, (err, result) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(result);
//   }

//   //finally

//   console.log("This always work");
// });

//Example 1 convert to use promise

// //creation

// const simplePromise = new Promise((resolve, rejected) => {
//   const success = false;
//   if (success) {
//     resolve("The operation was resolved");
//   } else {
//     //reject the promise
//     rejected("The promise failed");
//   }
// });

// //usage

// simplePromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("This will run anyways");
//   });

//Example 2 using callback

function isEven(num, cb) {
  if (num % 2 === 0) {
    cb(null, "Even number");
  } else {
    cb(new Error("The number is not even"));
  }
}

isEven(4, (err, result) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(result);
  }
});

//Creation of promise for example 2

function isEvenNumPromise(num) {
  return new Promise((resolve, rejecct) => {
    if (num % 2 === 0) {
      //resoilve the promise
      resolve("Even number");
    } else {
      rejecct("Not a even number");
    }
  });
}

//call the function

isEvenNumPromise(3)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Still work");
  });
