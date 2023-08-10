const express = require("express");
const {
	createTodoList,
	getAllTodoListOfUser,
} = require("../controller/TodoListController");
const { createTodoItem } = require("../controller/TodoItemController");

const router = express.Router();

router.post("/createList", createTodoList);
router.get("/", getAllTodoListOfUser);

router.post("/createItem", createTodoItem);

module.exports = router;
