require("dotenv").config();

console.log(process.env.PORT);
console.log(process.env.MONGO_URI);
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const Todo = require("./models/Todo");

const app = express();

// Connect to MongoDB with error handling
mongoose.connect(process.env.MONGO_URI)
    .catch(err => {
        console.error("MongoDB Connection Error:", err);
        process.exit(1);
    });

app.set("view engine","ejs");

app.use(express.static("public"));

app.use(express.urlencoded({
    extended:true
}));

app.use(session({
    secret:"todo-secret",
    resave:false,
    saveUninitialized:false
}));

app.get("/", async (req, res, next) => {
    try {
        if (!req.session.userId) {
            return res.redirect("/login");
        }
        
        const todos = await Todo.find({
            user: req.session.userId
        });
        
        res.render("index", { todos });
    } catch (err) {
        next(err);
    }
});
app.use("/",require("./routes/authRoutes"));
app.use("/",require("./routes/todoRoutes"));

// Error handling middleware
app.use((err, req, res, next) => {
    console.error("Error:", err);
    res.status(err.status || 500).render("error", { 
        message: err.message || "Internal Server Error" 
    });
});

app.listen(3000,()=>{
    console.log("Server Running");
});