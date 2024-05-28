const express = require("express");
const server = express();
const path = require("path");
const PORT = 8800;

server.use(express.static(path.join(__dirname, "public")));

const routes = require("../curem4-api/app/routes/index");
const fileUpload = require("express-fileupload");

server.use(fileUpload());
server.use(express.json());
routes(server);

server.listen(PORT, function () {
  console.log(`Server Started at http://localhost:${PORT}`);
});
