//Analyse process

// console.log(process);

//Environment variable

// console.log(process.env);

//How to add our own env
//Accessing env varialble
// const appEnv = process.env.APP_ENV || "development";

// //Display the env
// console.log(`Our node app ${appEnv} `);
//Setting the env

//!Process exit

//check the curent env ysing node env

// console.log(process.enn.NODE_ENV);

// if (process.env.NODE_ENV != "production") {
//   console.log("This script will only run in production");

//   process.exit();
// }

//cwd and change dir

// console.log(process.cwd());

try {
  process.chdir("D:\\Web_dev\\BackEndDev\\NodeJS\\Node-process\\random");
  console.log(`The new is ${process.cwd()}`);
} catch (error) {
  console.log(`Something happened ${error}`);
}
