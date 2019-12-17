const express = require("express");

const apiRouter = require("./api_router.js");
const configureMiddleware = require("./configure_middleware.js")

const server = express();

configureMiddleware(server);

server.use("/api", apiRouter);

module.exports = server;