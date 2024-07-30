//Basic syntax

// function multiply(a, b) {
//   return a * b;
// }

const multiply1 = (a, b) => a * b;
console.log(multiply1(2, 3));

//block body syntax

const greet = (name, age) => {
  return `ello, ${name} ${age}`;
};

console.log(greet("Hritik"));

//Single param , no parenthesis

const square = (num) => num * num;

console.log(square(3));

//No param

const random = () => Math.random();

console.log(random());

//obj literal return

const getUser = () => {
  return {
    name: "mysync",
    age: 10,
  };
};

console.log(getUser());
