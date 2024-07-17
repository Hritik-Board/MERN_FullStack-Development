//!Accessing the global object

// console.log(global);

// accessing the global object

global.myGlobal = "Hello fromm the global object";

// console.log(global);

// to check if out variable is truly global

// console.log("myGlobal" in global);

// console.log(__dirname);

//Using set interval and clear ingternvall

let count = 0;

const intervalid = setInterval(() => {
  console.log("Hello");
  count++;
  if (count === 5) {
    clearInterval(intervalid);
  }
}, 1000);

//! PROCESS OBJECTS
