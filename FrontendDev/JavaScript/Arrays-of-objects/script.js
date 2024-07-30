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

//SPLICE METHOD

const users = [
  { id: 1, isActive: true, name: "Hritk" },
  { id: 2, isActive: false, name: "Hrieetk" },
  { id: 3, isActive: true, name: "Ghas" },
  { id: 4, isActive: true, name: "Ghastoa" },
  { id: 5, isActive: true, name: "Ghaswwdwa" },
];

const IndextoRemove = users.findIndex((user) => {
  return user.isActive === false;
});

console.log(IndextoRemove);

if (IndextoRemove !== -1) {
  users.splice(IndextoRemove, 1);
}

const playlist = [
  { id: "s1", title: "Song 1", artist: "A" },
  { id: "s2", title: "Song 2", artist: "B" },
  { id: "s3", title: "Song 3", artist: "C" },
  { id: "s4", title: "Song 4", artist: "D" },
];

const IndexSong = playlist.findIndex(function (song) {
  return song.id === "s1";
});

console.log(IndexSong);

// if (IndexSong !== -1) {
//   playlist.splice(IndexSong, 1);
// }

//Move a song to a particuler Id

// const IndextoMove = playlist.findIndex((song) => song.id === "s1");

// if (IndextoMove !== -1) {
//   const [SongtoMove] = playlist.splice(IndextoMove, 1);

//   playlist.splice(2, 0, SongtoMove);
// }

// console.log(playlist);

// const newSong = { id: "S5", title: "Song 5", artist: "E" };

// playlist.splice(1, 0, newSong);

// console.log(playlist);

// ASSIGN METHOD

// const students = [
//   { id: 1, name: "Alice", grade: "A" },
//   { id: 2, name: "Bib", grade: "B" },
//   { id: 3, name: "dawd", grade: "C" },
// ];

// const gradeUpdate = [{ grade: "A+" }, { grade: "A" }];

// const updatedStd = students.map((student, index) => {
//   return Object.assign({}, student, gradeUpdate[index]);
// });

// console.log(updatedStd);

//FIND METHOD

// const patients = [
//   { id: 101, name: "sara", disease: "cold" },
//   { id: 102, name: "mike", disease: "fever" },
//   { id: 103, name: "lucy", disease: "TB" },
// ];

// const patientWithCold = patients.find((patient) => patient.disease === "cold");

// console.log(patientWithCold);

//SOME METHOD

// const patients = [
//   { id: 101, name: "sara", disease: "cold" },
//   { id: 102, name: "mike", disease: "fever" },
//   { id: 103, name: "lucy", disease: "TB" },
// ];

// const patientWithCold = patients.some((patient) => patient.disease === "cold");

// console.log(patientWithCold);

//EVERY METHOD

const students = [
  { id: 1, name: "Bob", grade: "B" },
  { id: 2, name: "Grde", grade: "F" },
  { id: 3, name: "Grwde", grade: "A" },
];

const allPassed = students.every((student) => student.grade !== "F");

console.log(allPassed);
