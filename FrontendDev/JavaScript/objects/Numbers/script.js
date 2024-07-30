// const book = {
//   title: "Subtle art",
//   author: "JK rowling",
//   price: 1500,
//   available: true,
//   pages: 12,
//   chain_mat: 123,
// };

// console.log(book);

// console.log(book.author);

// console.log(book.chain_mat);

// console.log(book["author"]);

// console.log(book["chain_mat"]);

// const person = {
//   "first name": "Bem",
//   "last name": "joe",
// };

// console.log(person["first name"]);

// const task = {
//   desc: "Finished homework",
//   iscompleted: false,
// };

// const query = "iscom" + "pleted";

// console.log(task[query]);

const userProfile = {
  username: "Hritik",
  email: "Hritik@email.com",

  portfolio: {
    work1: "L A",
    work2: "Sawd",
  },
};

userProfile.role = "SSE";

console.log(userProfile);

userProfile["department"] = "CSE";

console.log(userProfile);

const book1 = {
  title: "Subtle art",
};

book1.address = {
  city: "dabra",
  state: "ghana",
};

console.log(book1);

book1["publish year"] = 2024;

console.log(book1);

console.log(userProfile);
