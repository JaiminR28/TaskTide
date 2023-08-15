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
	{
		toJson: { virtuals: true },
		toObject: { virtuals: true },
	}
);

TodoListSchema.virtual("todoItems", {
	ref: "TodoItem",
	foreignField: "todolist",
	localField: "_id",
});

TodoListSchema.post(
	"remove",
	{ document: false, query: true },
	async function (next) {
		console.log("Called");
		const docs = await this.model.find(this.getFilter());
		console.log(docs);
		next();
	}
);

const TodoList = mongoose.model("TodoList", TodoListSchema);

module.exports = TodoList;
