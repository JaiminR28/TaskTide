const User = require("../models/User");

exports.handleUserSignup = async (req, res) => {
	console.log(req.body);
	const { name, email, password } = req.body;
	const newUser = await User.create({
		name,
		email,
		password,
	});

	res.status(201).json({
		meessage: "hello ",
	});
};
