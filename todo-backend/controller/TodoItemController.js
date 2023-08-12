const TodoItem = require("../models/TodoItem");

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
