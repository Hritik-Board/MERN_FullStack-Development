const { dir } = require("console");
const path = require("path");
const { PassThrough } = require("stream");

// console.log(path);

//?base name

const filename = path.basename("./rae/raeaw/sample.txt/som");

// console.log(filename);

//?dir name

const dirname = path.dirname("./rae/raeaw/som");

// console.log(dirname);

//? extenison name

const extname = path.extname("./rae/raeaw/sample.txt");

// console.log(extname);

//?.join

const joint = path.join("./user", "test", "file.txt");
// console.log(joint);

//?resolve
const abs = path.resolve("text", "file.tx");
// console.log(abs);

//?absolute

const isAbs = path.isAbsolute("/user/text");
console.log(isAbs);

//?parse

const parsedPath = path.parse("/user/test/file.txt");
console.log(parsedPath);
