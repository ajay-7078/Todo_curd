const Todo = require("../models/Todo");

const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

exports.dashboard = asyncHandler(async (req,res)=>{

    const todos = await Todo.find({
        user: req.session.userId
    }).sort({createdAt: -1});

    res.render("index",{todos});
});

exports.createTodo = asyncHandler(async (req,res)=>{

    await Todo.create({
        task: req.body.task,
        user: req.session.userId
    });

    res.redirect("/");
});

exports.deleteTodo = asyncHandler(async (req,res)=>{

    await Todo.findByIdAndDelete(
        req.params.id
    );

    res.redirect("/");
});

exports.editPage = asyncHandler(async (req,res)=>{

    const todo = await Todo.findById(
        req.params.id
    );

    if (!todo) {
        return res.status(404).render("error", { message: "Todo not found" });
    }

    res.render("edit",{todo});
});

exports.updateTodo = asyncHandler(async (req,res)=>{

    await Todo.findByIdAndUpdate(
        req.params.id,
        {
            task:req.body.task
        }
    );

    res.redirect("/");
});

exports.toggleTodo = asyncHandler(async (req,res)=>{

    const todo = await Todo.findById(req.params.id);
    
    if (!todo) {
        return res.status(404).render("error", { message: "Todo not found" });
    }

    todo.completed = !todo.completed;
    await todo.save();

    res.redirect("/");
});