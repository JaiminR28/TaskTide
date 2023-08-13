const TodoList = require("../models/TodoList");

exports.createTodoList = async (req, res) => {
	try {
		const { title } = req.body;
		const user = req.user;

		if (!title || !user)
			res.status(400).json({ message: "please provide all the details" });

		const NewList = await TodoList.create({ title, user });

		if (NewList) {
			res.status(201).json({
				NewList,
			});
		}
	} catch (error) {
		console.log(error);
	}
};

exports.getAllTodoListOfUser = async (req, res) => {
	const user = req.user;

	if (!user) res.status(404).json({ message: "User not found" });

	const doc = await TodoList.find({ user: user }).populate("todoItems");
	if (doc)
		res.status(200).json({
			status: "success",
			data: {
				data: doc.todoItems,
			},
		});
};

exports.deleteTodoList = async (req, res) => {
	try {
		const doc = await TodoList.findByIdAndDelete(req.params.id);

		if (doc) {
			res.status(204).json({
				status: "sucess",
				data: null,
			});
		} else {
			res.status(404).json({
				message: "Item not found !!",
				data: null,
			});
		}
	} catch (error) {
		console.log(error);
	}
};
