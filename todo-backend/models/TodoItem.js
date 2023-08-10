const mongoose = require("mongoose");

const TodoItemSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		createdAt: {
			type: Date,
			default: Date.now,
			required: true,
		},
		dueDate: {
			type: Date,
			default: function () {
				const currentDate = new Date();
				currentDate.setDate(currentDate.getDate() + 1); // Increment to the next day
				currentDate.setHours(0, 0, 0, 0); // Set time to midnight
				return currentDate;
			},
			required: "true",
		},
		isCompleted: { type: Boolean, default: false },
		content: { type: String },
		todolist: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "TodoList",
			required: [true, "There must be a todoList"],
		},
	},
	{
		Timestamps: true,
		toJson: { virtuals: true },
		toObject: { virtuals: true },
	}
);

const TodoItem = mongoose.model("TodoItem", TodoItemSchema);

module.exports = TodoItem;
