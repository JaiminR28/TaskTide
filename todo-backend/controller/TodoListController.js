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

	const UserLists = await TodoList.find({ user: user });

	if (UserLists) res.status(200).json(UserLists);
};
