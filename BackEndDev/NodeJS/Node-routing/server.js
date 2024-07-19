//1. Import the required modules
const url = require("url");
const http = require("http");
// console.log(http);

//2.  Define the handler

const requestHandler = (request, response) => {
  console.log(request.url);

  //Pass the url
  const passedURL = url.parse(request.url, true);
  // console.log(passedURL);
  //Home route
  if (passedURL.pathname === "/" && request.method === "GET") {
    response.writeHead(200, { "content-type": "text/plain" });
    response.end("Welcome home page");
  }

  //About page
  else if (passedURL.pathname === "/about" && request.method === "GET") {
    response.writeHead(200, { "content-type": "text/plain" });
    response.end("Welcome to the about page");
  } else {
    response.writeHead(200, { "content-type": "text/plain" });
    response.end("Not found");
  }
  // console.log(request);
  //send response
  // response.writeHead(200, { "content-type": "text/plain" });
  // response.end("Hello world");
};

//3. create the server

const server = http.createServer(requestHandler);

//4. start the server

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
