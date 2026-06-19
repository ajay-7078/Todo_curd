const express = require("express");
const mongoose = require("mongoose");
const todoRoutes = require("./routes/todoRoutes");

const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/todoDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", todoRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});