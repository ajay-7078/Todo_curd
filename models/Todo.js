const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
{
    task: {
        type: String,
        required: true
    },

    description: {
        type: String
    },

    priority: {
        type: String,
        enum: ["Low", "Medium", "High"],
        default: "Low"
    },

    dueDate: Date,

    completed: {
        type: Boolean,
        default: false
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }

},
{
    timestamps: true
});

module.exports = mongoose.model("Todo", todoSchema);