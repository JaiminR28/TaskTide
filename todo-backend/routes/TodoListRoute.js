const express = require("express");
const {
	createTodoList,
	getAllTodoListOfUser,
} = require("../controller/TodoListController");
const {
	createTodoItem,
	deleteTodoItem,
} = require("../controller/TodoItemController");

const router = express.Router();

router.post("/createList", createTodoList);
router.get("/", getAllTodoListOfUser);

router.post("/createItem", createTodoItem);

router.delete("/:id", deleteTodoItem);

module.exports = router;
