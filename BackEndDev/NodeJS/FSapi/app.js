const fs = require("fs");
// const { isErrored } = require("stream");

// console.log(fs);

//? Read a file

//?Sync way

// const databuffer = fs.readFileSync("./sample.txt");

// const content = databuffer.toString();

// console.log(content);

//?Async way
// fs.readFile("./sample.txt", "utf-8", (err, content) => {
//   if (err) {
//     console.log(err);
//     throw err;
//   } else {
//     console.log(content);
//   }
// });

//?write to a file

// fs.writeFile(
//   "./new.txt",
//   "dawddddddddddddddddddddddddwaaaaaaaaaaaaaadwwwwwa dawd awd awd aw daw ",
//   (err) => {
//     if (err) {
//       console.log(err);
//       return;
//     } else {
//       console.log("Done");
//     }
//   }
// );

//?Append the file

// fs.appendFile("./new.txt", "Appened content", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("File content appended");
//   }
// });

//?check if the file exist

// fs.access("./new2.txt", fs.constants.F_OK, (err) => {
//   if (err) {
//     console.log("File does not exist");
//   } else {
//     console.log("File exist");
//   }
// });

//?delete a file

fs.unlink("./new.txt", (err) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log("Deleted");
  }
});
