//1. Import the required modules
const url = require("url");
const http = require("http");
// console.log(http);

//2.  Define the handler

const requestHandler = (request, response) => {
  console.log(request.url);

  //Pass the url
  const passedURL = url.parse(request.url, true);

  //extract the query params
  const queryParams = passedURL.query;
  console.log(queryParams);

  response.writeHead(200, { "Content-type": "text/pain" });
  response.end(`welcome`);
};

//3. create the server

const server = http.createServer(requestHandler);

//4. start the server

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
