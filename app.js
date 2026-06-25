require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const Todo = require("./models/Todo");

const app = express();

// Connect to MongoDB with error handling (non-blocking for serverless)
let isMongoConnected = false;

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        isMongoConnected = true;
        console.log("✅ MongoDB Connected");
    })
    .catch(err => {
        console.error("⚠️ MongoDB Connection Error:", err.message);
        // Don't exit process in serverless environment
        // Connection will retry on next request
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

// For local development
if (process.env.NODE_ENV !== "production") {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`🚀 Server Running on http://localhost:${PORT}`);
    });
}

// Export for Vercel
module.exports = app;