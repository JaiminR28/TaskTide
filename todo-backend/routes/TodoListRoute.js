const express = require("express");
const {
	createTodoList,
	getAllTodoListOfUser,
	deleteTodoList,
	updateTodoList,
} = require("../controller/TodoListController");
const {
	createTodoItem,
	deleteTodoItem,
	updateTodoItem,
} = require("../controller/TodoItemController");

const router = express.Router();

router.post("/createList", createTodoList);
router.get("/", getAllTodoListOfUser);

router.post("/createItem", createTodoItem);

router.delete("/delete-item/:id", deleteTodoItem);
router.delete("/delete-list/:id", deleteTodoList);

router.patch("/update-item/:id", updateTodoItem);
router.patch("/update-list/:id", updateTodoList);

module.exports = router;
