//1. Import the required modules
const url = require("url");
const http = require("http");
// console.log(http);

//2.  Define the handler

const requestHandler = (request, response) => {
  const data = {
    id: 123,
    name: "hritik Gupta",
    email: "hritik@gmail.com",
  };

  //set response head to json

  response.setHeader("Content-type", "Application/json");

  response.end(JSON.stringify(data));
};

//3. create the server

const server = http.createServer(requestHandler);

//4. start the server

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
