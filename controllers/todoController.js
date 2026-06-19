const Todo = require("../models/Todo");

exports.getTodos = async (req, res) => {
  const todos = await Todo.find();
  res.render("index", { todos });
};

exports.createTodo = async (req, res) => {
  await Todo.create({
    task: req.body.task,
  });

  res.redirect("/");
};

exports.editPage = async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  res.render("edit", { todo });
};

exports.updateTodo = async (req, res) => {
  await Todo.findByIdAndUpdate(req.params.id, {
    task: req.body.task,
  });

  res.redirect("/");
};

exports.deleteTodo = async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);

  res.redirect("/");
};

exports.toggleStatus = async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  await Todo.findByIdAndUpdate(req.params.id, {
    completed: !todo.completed,
  });

  res.redirect("/");
};