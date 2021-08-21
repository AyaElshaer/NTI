const express = require('express')
require('../app/db/connection')
const app = express()

 const taskRoute = require('../routes/task.route')

app.use(express.json())

app.use(taskRoute)


module.exports = app