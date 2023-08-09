const express = require("express");
const {
	handleUserSignup,
	handleUserLogin,
} = require("../controller/userController");

const router = express.Router();

router.post("/signup", handleUserSignup).post("/login", handleUserLogin);
module.exports = router;
