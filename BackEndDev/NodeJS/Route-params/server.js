//1. Import the required modules
const url = require("url");
const http = require("http");
// console.log(http);

//2.  Define the handler

const requestHandler = (request, response) => {
  console.log(request.url);

  //Pass the url
  const passedURL = url.parse(request.url, true);

  const pathname = passedURL.pathname;

  console.log(pathname);

  //split the path name
  const pathComp = pathname.split("/").filter(Boolean);

  console.log(pathComp);

  if (pathComp[0] === "products" && pathComp[1]) {
    //Take the product id AND send to the user
    //perfoirm DB query to find the prd;

    const productID = pathComp[1];
    //send to the user
    response.writeHead(200, { "content-type": "text/plain" });
    response.end(`Product ID ${productID} `);
  } else {
    response.writeHead(200, { "content-type": "text/plain" });
    response.end(`Not found `);
  }
};

//3. create the server

const server = http.createServer(requestHandler);

//4. start the server

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
