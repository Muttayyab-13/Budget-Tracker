// const http = require("http");

// const hostname = "127.0.0.1";
// const port = 3000;

// const server = http.createServer(function (req, res) {
//   res.statusCode = 200;
//   res.setHeader("ContentType", "text/plain");
//   res.end("Hello World/n");
// });

// server.listen(port, hostname, function () {
//   console.log("Server running at http://" + hostname + ":" + port + "/");
// });

import express from "express";
const port = 3000;

const app = express();

app.get

app.listen(port, () => {
  console.log("Port running on server" + port);
});
