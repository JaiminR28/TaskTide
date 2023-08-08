const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoute");
const bodyParser = require("body-parser");

const app = express();

mongoose
	.connect("mongodb://localhost:27017/todo-lists")
	.then(() => console.log("DB connection successfull !!"));

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
// app.get("/", (req, res) => {
// 	res.status(200).json("Hello World from the serv side");
// });

app.use("/v1/todo-list/users", userRouter);

app.listen(8000, () => {
	console.log("Server is started !!");
});
