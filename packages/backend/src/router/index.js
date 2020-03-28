const express = require('express');
const router = express.Router();
const { clearCompleted,
    createTodo,
    deleteTodo,
    updateTodo,
    getTodoList } = require('../controller/TodoController');

router.post('/createTodo', createTodo);
router.post('/updateTodo', updateTodo);
router.post('/deleteTodo', deleteTodo);
router.post('/todos', getTodoList);
router.post('/clearCompleted', clearCompleted);

module.exports = router;