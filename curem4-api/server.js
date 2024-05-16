const express = require('express');
const server = express();
const PORT = 8800;
const routes = require('../curem4-api/app/routes/index');
routes(server)

server.use(express.json());

server.listen(PORT, function () {
    console.log(`Server Started at http://localhost:${PORT}`);
});