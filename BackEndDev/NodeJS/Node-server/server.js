//1. Import the required modules

const http = require("http");
// console.log(http);

//2.  Define the handler

const requestHandler = (request, response) => {
  console.log(request);
  //send response
  response.writeHead(200, { "content-type": "text/plain" });
  response.end("Hello world");
};

//3. create the server

const server = http.createServer(requestHandler);

//4. start the server

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
