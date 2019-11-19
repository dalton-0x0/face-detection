const express = require("express");
const app = express();
/*
app.use((req, res, next) => {
  console.log("<h1>hello world</h1>");
  next();
});
*/
/*
app.get("/", (res, req) => {
  console.log("app.get from root");
});

app.get("/profile", (res, req) => {
  console.log("app.get from profile");
});
*/
app.get("/profile", (req, res) => {
  const user = {
    name: "sally",
    hobby: "singing"
  };
  res.send(user);
});
app.listen(3030);
/*
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
*/
