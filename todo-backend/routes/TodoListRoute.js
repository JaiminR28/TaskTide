const express = require("express");
const {
	createTodoList,
	getAllTodoListOfUser,
	deleteTodoList,
} = require("../controller/TodoListController");
const {
	createTodoItem,
	deleteTodoItem,
} = require("../controller/TodoItemController");

const router = express.Router();

router.post("/createList", createTodoList);
router.get("/", getAllTodoListOfUser);

router.post("/createItem", createTodoItem);

router.delete("delete-item/:id", deleteTodoItem);
router.delete("delete-list/:id", deleteTodoList);

module.exports = router;
