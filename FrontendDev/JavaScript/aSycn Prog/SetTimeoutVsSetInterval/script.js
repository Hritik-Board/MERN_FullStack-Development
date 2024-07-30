// set timeout

// const showMessage = () => {
//     console.log("Hello after 3 seconds");
// };

// //schedule the message

// setTimeout(showMessage, 3000);

//rewrite

// setTimeout(() => {
//   console.log("Hello after 3 seconds");
// }, 3000);
// console.log("Waiting for the message");

//Cancel the set timeout

// const timeoutId = setTimeout(() => {
//   console.log("This will not be displayed");
// }, 2000);

// console.log("Timeout scheduled");

// clearTimeout(timeoutId);

// console.log(timeoutId);

// console.log("timeout cancelled");

//--- setinterval----

// setInterval(() => {
//   console.log("Interval set");
// }, 2000);

let counter = 0;

const setintervalId = setInterval(() => {
  counter++;
  console.log(counter);
  if (counter >= 5) {
    clearInterval(setintervalId);
  }
}, 2000);

console.log(setintervalId);
