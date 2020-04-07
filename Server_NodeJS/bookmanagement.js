var express = require('express');
var Application = express();
var bodyParser = require("body-parser");
var bookRouter = require("./Router/books")
var userRouter = require("./Router/user")

Application.use(bodyParser.json());
Application.use(bodyParser.urlencoded({ extended : true }));
Application.use('/books', bookRouter);
Application.use("/user", userRouter);
Application.listen("3000")

