const { getUser } = require("../utils/auth");

exports.restrictToLoggedIn = async (req, res, next) => {
	const userUid = req.cookies.uid;

	if (!userUid)
		res.status(400).json({ message: "Plesase login and then try" });
	const user = getUser(userUid);

	if (!user)
		res.status(404).json({ message: "User not found. Create an account" });

	req.user = user;
	next();
};
