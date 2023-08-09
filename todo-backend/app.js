const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const userRouter = require("./routes/userRoute");
const listRouter = require("./routes/TodoListRoute");
const { restrictToLoggedIn } = require("./middleware/authMiddleware");

const app = express();

mongoose
	.connect("mongodb://localhost:27017/todo-lists")
	.then(() => console.log("DB connection successfull !!"));

app.use(bodyParser.json());
app.use(cookieParser());
// app.get("/", (req, res) => {
// 	res.status(200).json("Hello World from the serv side");
// });

app.use("/v1/todo-list/users", userRouter);
app.use("/v1/todo-list/", restrictToLoggedIn, listRouter);

app.listen(8000, () => {
	console.log("Server is started !!");
});
