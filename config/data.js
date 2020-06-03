const todos  = [];

module.exports = {
    getAll,
    create,
    deleteOne,

}

function getAll() {
    return todos;
}

function create(todo) {
    todos.push(todo);
}

function deleteOne(idx) {
    todos.splice(idx, 1);
}