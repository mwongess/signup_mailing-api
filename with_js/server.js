const express = require("express");
const cron = require("node-cron");
const startServer = require("./lib/boot");
const runCron = require("./lib/cron");

const server = express();

runCron(cron);
startServer(server);
