const TodoItem = require("../models/TodoItem");
const { findByIdAndUpdate } = require("../models/TodoList");

exports.createTodoItem = async (req, res) => {
	try {
		const NewItem = await TodoItem.create(req.body);

		if (NewItem) {
			res.status(201).json({
				NewItem,
			});
		}
	} catch (error) {
		console.log(error);
	}
};

exports.deleteTodoItem = async (req, res) => {
	try {
		const doc = await TodoItem.findByIdAndDelete(req.params.id);

		if (doc) {
			res.status(204).json({
				status: "sucess",
				data: null,
			});
		}
	} catch (error) {
		console.log(error);
	}
};
exports.updateTodoItem = async (req, res) => {
	try {
		console.log(req.params.id);
		const doc = await TodoItem.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});

		if (doc) {
			res.status(204).json({
				status: "sucess",
				data: doc,
			});
		}
	} catch (error) {
		console.log(error);
	}
};
