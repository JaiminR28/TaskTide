const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const TodoListSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		createdAt: {
			type: Date,
			default: Date.now,
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: [true, "TodoList must belong to a user"],
		},
	},
	{ Timestamps: true }
);

const TodoList = mongoose.model("TodoList", TodoListSchema);

module.exports = TodoList;