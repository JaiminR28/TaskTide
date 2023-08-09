const express = require("express");
const {
	createTodoList,
	getAllTodoListOfUser,
} = require("../controller/TodoListController");

const router = express.Router();

router.post("/createList", createTodoList);
router.get("/", getAllTodoListOfUser);
module.exports = router;
