//first function retruning a promise

function stepOne() {
  return new Promise((resolve) => {
    resolve("Step 1 completed");
  });
}

function stepTwo() {
  return new Promise((resolve) => {
    resolve("Step 2 completed");
  });
}

function stepThree() {
  return new Promise((resolve) => {
    resolve("Step 3 completed");
  });
}

//Chaining

stepOne()
  .then((resFP1) => {
    console.log(resFP1);
    return stepTwo();
  })
  .then((resFP2) => {
    console.log(resFP2);
    return stepThree();
  })
  .then((resFP3) => {
    console.log(resFP3);
  })
  .catch((err) => {
    console.log("Error occured");
  });
