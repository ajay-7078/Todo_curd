const router = require("express").Router();

const auth =
require("../middleware/auth");

const todo =
require("../controllers/todoController");

router.get(
    "/dashboard",
    auth,
    todo.dashboard
);

router.post(
    "/create",
    auth,
    todo.createTodo
);

router.get(
    "/delete/:id",
    auth,
    todo.deleteTodo
);

router.get(
    "/edit/:id",
    auth,
    todo.editPage
);

router.post(
    "/update/:id",
    auth,
    todo.updateTodo
);

router.get(
    "/toggle/:id",
    auth,
    todo.toggleTodo
);

module.exports = router;