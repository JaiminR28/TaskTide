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
		},
		isCompleted: { type: Boolean, default: false },
		content: { type: String, required: true },
		list: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "TodoList",
			required: [true, "TodoList must belong to a user"],
		},
	},
	{ Timestamps: true }
);

const TodoList = mongoose.model("TodoList", TodoListSchema);

module.exports = TodoList;
