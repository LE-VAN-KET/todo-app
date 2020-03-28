const { insert, updateById, deleteById, findAll, todos } = require('../todo');
describe('Test todo model', () => {
    it('should create todo is return insert todo', () => {
        const inserted = insert({ id: 1, title: 'first todo'});
        expect.assertions(3);
        expect(inserted).toEqual({ id: 1, title: 'first todo', completed: false });
        expect(todos.length).toEqual(1);
        expect(todos[0]).toEqual({ id: 1, title: 'first todo', completed: false });
    });

    it('should update todo is return todo updated one', () => {
        // const inserted = insert({ id: 1, title: "first todo"});
        const updated = updateById({ id: 1, title: "secon todo"});
        expect(updated).toEqual({ id: 1, title: "secon todo", completed: false});
    });

    it('should return false if not found todo item', () => {
        // const inserted = insert({ id: 1, title: "first todo"});
        const updated = updateById({ id: 2, title: "secon todo"});
        expect(updated).toEqual(false);
    });

    it('should delete todo with id', () => {
        // insert({ id: 1, title: "first todo"});
        const deleted = deleteById(1);
        expect.assertions(2);
        expect(deleted).toEqual(true);
        expect(todos.length).toEqual(0);
    });

    it('should return false if could not found todo id', () => {
        insert({ id: 1, title: "first todo"});
        const deleted = deleteById(2);
        expect.assertions(2);
        expect(deleted).toEqual(false);
        expect(todos.length).toEqual(1);
    });

    it('should return all todo', () => {
        insert({ id: 2, title: "secon todo"});
        const todoList = findAll();
        expect(todoList).toEqual(todos);
    });

    it('should return all activated todos', () => {
        insert({ id: 3, title: "third todo"});
        insert({ id: 4, title: "four todo"});
        updateById({ id: 2, completed: true});
        const todoList = findAll({ completed: false});
        expect(todoList.length).toEqual(3);
    });

    it('should return all completed todos', () => {
        const todoList = findAll({ completed: true});
        expect(todoList.length).toEqual(1);
    });
});