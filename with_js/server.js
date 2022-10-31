const express = require('express')
const startServer = require('../lib/boot')

const server = express()

startServer(server)