// // Concept of objs being passed by reference

// //modify obj thrgh a diff reference

// const person = { name: "Hritik ", age: 20 };

// console.log(person);

// const person2 = person;
// person2.age = 40;
// console.log(person2);
// console.log(person);

// person.name = "Hri";
// console.log(person2);
// console.log(person);

// //Pass obj to a funcion

// const increAge = (personObj) => {
//   personObj.age += 1;
// };

// //person Obj

// const bob = { name: "Bob", age: 40 };
// console.log(bob.age);

// increAge(bob);

// console.log(bob.age);

// Objects in arrays

//Managing a list of students

// const students = [
//   { id: 1, name: "Bob", grade: "B" },
//   { id: 2, name: "Grde", grade: "A" },
// ];

// // const student1 = students[1];

// // console.log(student1);

// // console.log(students);

// // const addNew = (id, name, grade) => {
// //   const newStd = { id, name, grade };
// //   students.push(newStd);
// // };

// // // addNew(3, "Hritk", "C");
// // // console.log(students);

// // //update

// // const updateStd = (id, newGrade) => {
// //   const stdfound = students.find((student) => {
// //     return student.id === id;
// //   });

// //   if (stdfound) {
// //     stdfound.grade = newGrade;
// //   } else {
// //     console.log("NOt dounf");
// //   }
// // };

// // updateStd(2, "F");

// // console.log(students);

// //Arrays in objects

// const todoList = {
//   title: "To Do list",
//   task: [
//     { id: 1, dec: "Buy Grocery", completed: false },
//     { id: 2, dec: "Games", completed: true },
//     { id: 3, dec: "Call mom", completed: false },
//   ],
// };

// todoList.title;
// const alltask = todoList.task;
// console.log(alltask);
// console.log(todoList);

// const addTask = (dec) => {
//   const newId = todoList.task.length + 1;

//   const newTask = {
//     id: newId,
//     completed: false,
//     dec,
//   };

//   todoList.task.push(newTask);
// };

// // addTask("Reading");

// // console.log(todoList);

// const markAsCom = (id) => {
//   const foundTask = todoList.task.find((task) => task.id === id);

//   if (foundTask) {
//     foundTask.completed = true;
//   } else {
//     console.log("not foung");
//   }
// };

// markAsCom(2);

// console.log(markAsCom());

// const fruits = [
//   { name: "apple", color: "red" },
//   { name: "banana", color: "yellow" },
//   { name: "cherry", color: "red" },
// ];

// // fruits.forEach((current, index, val) => {
// //   console.log(current, index, val);
// // });

// const cart = [
//   { name: "Colgate", price: 1000, quantity: 2 },
//   { name: "TV", price: 500, quantity: 1 },
//   { name: "laptop", price: 3000, quantity: 1 },
// ];

// let total = 0;
// cart.forEach((item) => {
//   console.log(item);

//   //sum

//   total += item.price * item.quantity;
// });

// let itemName = [];

// cart.forEach((item) => {
//   itemName.push(item.name);
// });

// console.log(itemName);

// let Titems = 0;

// cart.forEach((item) => {
//   Titems += item.quantity;
// });

// console.log(Titems);

//MAP FUNCTION

// const Scart = [
//   { name: "Colgate", price: 1000, quantity: 2 },
//   { name: "TV", price: 500, quantity: 1 },
//   { name: "laptop", price: 3000, quantity: 1 },
// ];

// const Dcart = Scart.map((product) => {
//   return {
//     name: product.name,
//     price: product.price * 0.9,
//   };
// });

// console.log(Dcart);

// const Ncart = Scart.map((product) => {
//   return {
//     name: product.name,
//   };
// });

// console.log(Ncart);

//FILTER FUNCTION

// const users = [
//   { id: 1, isActive: false, name: "Hritk" },
//   { id: 2, isActive: false, name: "Hrieetk" },
//   { id: 3, isActive: true, name: "Ghas" },
// ];

// const activeUsers = users.filter((user) => {
//   return user.isActive === true;
// });

// console.log(activeUsers);
