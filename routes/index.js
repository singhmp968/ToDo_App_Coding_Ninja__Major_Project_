// route class for todo application

const express = require('express');
const router = express.Router();
const homeController = require('../controller/homecontroller');
router.get('/',homeController.home)
router.post('/create_todo',homeController.createTodo) //controller for creating todo list
router.post('/delete_todo',homeController.deleteTodo) // controller for deleting the todo list
router.get('/editdata',homeController.EditPage)       // controller for getting Edit page
router.post('/edit-todolist',homeController.editDetails) // conteoller for Edting todo list
console.log('router is loaded')
module.exports = router;