const todosModel = require('../model/todo');

exports.createTodo = (req, res) => {
    const todo = req.body;
    const inserted = todosModel.insert(todo);
    res.json(inserted);
};

exports.updateTodo = (req, res) => {
    const todo = req.body;
    const updated = todosModel.updateById(todo);
    res.json(updated);
};

exports.getTodoList = (req, res) => {
    const { completed } = req.body;
    const todos = 
        completed === undefined 
        ? todosModel.findAll()
        : todosModel.findAll({ completed: !!completed });
    res.json(todos);
};

exports.deleteTodo = (req, res) => {
    const { id } = req.body;
    const result = todosModel.deleteById(id);
    res.json({ result });
};

exports.clearCompleted = (_, res) => {
    const completed = todosModel.findAll({ completed: true });
    completed.forEach(todo => {
        todosModel.deleteById(todo.id);
    });
    res.json({ result: true });
};