const User = require("../models/User");
const { v4: uuidv4 } = require("uuid");
const { setUser } = require("../utils/auth");

exports.handleUserSignup = async (req, res) => {
	const { name, email, password } = req.body;
	const newUser = await User.create({
		name,
		email,
		password,
	});

	res.status(201).json({
		newUser,
	});
};
exports.handleUserLogin = async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email, password });

	if (!user) {
		res.status(404).json({ message: "user not found !!" });
	} else {
		const sessionId = uuidv4();
		setUser(sessionId, user);

		res.cookie("uid", sessionId);
		res.status(201).json({
			user,
		});
	}
};
