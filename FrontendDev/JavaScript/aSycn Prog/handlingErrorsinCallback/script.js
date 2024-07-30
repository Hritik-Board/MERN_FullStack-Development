// soimple calc with errors

const divideNum = (dividen, dividor, callback) => {
  setTimeout(() => {
    if (dividor === 0) {
      callback(new Error("Can not  divide by 0"), null);
    } else {
      callback(null, dividen / dividor);
    }
  }, 1000);
};

divideNum(2, 0, function (error, result) {
  if (error) {
    console.log("Error", error.message);
    return;
  } else {
    console.log("Result is", result);
  }
});
