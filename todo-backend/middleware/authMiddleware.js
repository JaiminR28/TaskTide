const { getUser } = require("../utils/auth");

exports.restrictToLoggedIn = async (req, res, next) => {
	const userUid = req.cookies.uid;

	if (!userUid) return next();
	const user = getUser(userUid);

	if (!user) return next();

	req.user = user;
	next();
};
