// import http from "http";

const http = require("http");

const myServer = http.createServer((request, response) => {
  //   console.log("header: ", request.headers);
  const user = {
    name: "john",
    hobby: "skating"
  };
  console.log("method: ", request.method);
  console.log("url: ", request.url);
  //   response.setHeader("Content-Type", "text/html");
  response.setHeader("Content-Type", "application/json");
  response.end(JSON.stringify(user));
  //   console.log("hello from server! thanks for the request");
});

myServer.listen(3000);
