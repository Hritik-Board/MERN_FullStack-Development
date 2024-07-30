//Destructuring in ES6

//basic
const numbers = [1, 2, 3, 5];

const [f, s, t, fr] = numbers;

// console.log(fr);

//

// let a = 1;
// let b = 2;

// [a, b] = [b, a];

// console.log(b);

//object Destructure

// const { name, age, email } = { name: "hritk", age: 10, email: " @gmail" };

// const user = { name: "hritk", age: 10, email: " @gmail" };

// console.log(user.name);

// console.log(name);

//Destruc function param

// function greet(userObj) {
//   console.log(`Hello,${userObj.name}, age is ${userObj.age}`);
// }

// function greet({ name, age }) {
//   console.log(`Hello,${name}, age is ${age}`);
// }

// const userObj = {
//   name: "Hritkk",
//   age: 10,
// };

// greet(userObj);

//nested destruc

const {
  id,
  info: { name, age },
} = {
  id: 1,
  info: {
    name: "Hritk",
    age: 10,
  },
};

console.log(name);
