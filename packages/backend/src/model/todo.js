const todos=[];

/**
 * insert todo to database
 * @todo {id, title, completed}
 */
exports.insert = (todo) => {
    const tobeTodo = { ...todo, completed: false };
    todos.push(tobeTodo);
    return tobeTodo;
};

/**
 * update todo by id
 * @param { todo: todo }
 * @return { todo | false }
 */
exports.updateById = (todo) => {
    let todoIdx = todos.findIndex(t => t.id == todo.id); // todo || undefined
    if (todoIdx !== -1) {
        todos[todoIdx] = { ...todos[todoIdx],...todo };
        return todos[todoIdx];
    } else {
        return false;
    }
};

/**
 * delete todo by id
 * @param { id: number}
 * @return { boolean }
 */
exports.deleteById = (id) => {
    const todoIdx = todos.findIndex(todo => todo.id == id); // tindex of todo || -1
    if (todoIdx == -1) {
        return false;
    } 

    todos.splice(todos, 1); //delete todo
    return true;
};

/**
 * find all todos
 * @param { completed }
 * @return { list }
 */
exports.findAll = params => {
    if (!params) {
        return todos;
    } else {
        const { completed } = params;
        return todos.filter(p => p.completed === completed);
    }
}

exports.todos = todos;