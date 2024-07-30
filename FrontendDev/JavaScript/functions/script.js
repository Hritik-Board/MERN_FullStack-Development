const sayHello = function () {
  console.log("Hello");
};

// sayHello();

// const checkeven = function () {
//   const numb = 4;
//   if (numb % 2 === 0) {
//     console.log("evem");
//   } else {
//     console.log("odd");
//   }
// };

// checkeven();

// function() {
//     console.log("yes");
// }

// (function () {
//   console.log("welcome");
// })();

// (function () {
//   const num = 5;
//   console.log(num * num);
// })();

function outerf() {
  const outerfu = "Outer";
  function innerf() {
    const innerfu = "inner";
    console.log(outerfu);
  }
  console.log(innerfu);

  innerf();
}

outerf();

Mi;
