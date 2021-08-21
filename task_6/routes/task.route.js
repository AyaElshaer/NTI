const express = require('express')
const router =new express.Router()
const taskController = require('../app/controller/task.controller')

router.post('/add',taskController.addTask );
router.get('/all' ,taskController.getAllTasks );
router.get('/all/:id' ,taskController.getSingle );
router.post('/delete/:id' , taskController.deleteTask)
router.post('/edite/:id' , taskController.editTask)
module.exports = router