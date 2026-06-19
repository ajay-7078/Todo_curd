const express = require("express");
const router = express.Router();

const {
  getTodos,
  createTodo,
  editPage,
  updateTodo,
  deleteTodo,
  toggleStatus,
} = require("../controllers/todoController");

router.get("/", getTodos);

router.post("/create", createTodo);

router.get("/edit/:id", editPage);

router.post("/update/:id", updateTodo);

router.get("/delete/:id", deleteTodo);

router.get("/toggle/:id", toggleStatus);

module.exports = router;