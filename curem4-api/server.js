const express = require('express');
const server = express();
const PORT = 8800;
const routes = require('../curem4-api/app/routes/index');
server.use(express.json());
routes(server)


server.listen(PORT, function () {
    console.log(`Server Started at http://localhost:${PORT}`);
});