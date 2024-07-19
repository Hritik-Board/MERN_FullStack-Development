//!Required files or modules
const http = require("http");
const { json } = require("stream/consumers");

//!mimic (database)

const employees = [
  { id: 1, name: "Hritik" },
  { id: 2, name: "Rahul" },
];

//!2.  Define the handler

const requestHandler = (request, response) => {
  const { method, url } = request;
  console.log(url);
  console.log(method);

  const parts = url.split("/");
  const id = parts[2];
  //   console.log(parts);

  //?Get all employees
  if (method === "GET" && url === "/employees") {
    response.writeHead(200, { "Content-type": "application/json" });
    response.end(JSON.stringify(employees));
  }

  //?specific employee
  else if (method === "GET" && parts[1] === "employees" && id) {
    const employee = employees.find((emp) => emp.id === parseInt(id));
    if (employee) {
      response.writeHead(200, { "Content-type": "application/json" });
      response.end(JSON.stringify(employee));
    } else {
      response.writeHead(200, { "Content-type": "application/json" });
      response.end("Not found");
    }
  }

  //!create an employee
  else if (method === "POST" && url === "/employees") {
    let body = "";

    //?listen to the event of making post request
    request.on("data", (chunk) => {
      body += chunk;
    });

    //?Send the response / End the event
    request.on("end", () => {
      const newEmp = JSON.parse(body);
      employees.push(newEmp);
      response.writeHead(200, { "Content-type": "application/json" });
      response.end(JSON.stringify(newEmp));
    });
  }
};

//!3. create the server

const server = http.createServer(requestHandler);

//!4. start the server

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
