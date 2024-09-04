const todos = [];

exports.getTodos = (req, res)=> {
    res.render("index", {allTodos: todos})
};

exports.saveTodos = (req, res)=> {
    const todo = req.body.todo;
    todos.push(todo)
    res.redirect("/")
};