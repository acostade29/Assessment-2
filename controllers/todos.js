const Todo = require('../config/data');

module.exports = {
    index,
    create,
    delete: deleteOne,

}

function index(req, res) {
res.render('index', {todos: Todo.getAll() });
}

function create(req, res) {
    req.body.done = false;
    Todo.create(req.body);
    res.redirect('/')
    
}

function deleteOne(req, res) {
    Todo.deleteOne(req.params.idx);
    res.redirect('/');
}