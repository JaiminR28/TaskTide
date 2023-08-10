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
