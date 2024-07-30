//Promise.all

//create promises

// const Promise1 = Promise.resolve("Promise 1 resolved");

// const Promise2 = Promise.resolve("Promise 2 resolved");

// Promise.all([Promise1, Promise2]).then((result) => {
//   console.log(result);
// }).catch((err)=>{
//   console.log(err);
// })

//Promise.race
const Promise1 = Promise.resolve("Promise 1 resolved");

const Promise2 = Promise.reject(new Error("Promise 2 rejected"));

Promise.race([Promise1, Promise2])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
