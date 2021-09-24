const express = require('express');
const router = express.Router();
const homeController = require('../controller/homecontroller');
// importing todolist fonr 
 
router.get('/',homeController.home)

router.post('/create_todo',homeController.createTodo)

router.post('/delete_todo',homeController.deleteTodo)
router.get('/editdata',homeController.EditPage)
router.post('/edit-todolist',homeController.editDetails)
console.log('router is loaded')

module.exports = router;