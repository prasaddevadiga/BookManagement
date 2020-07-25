var express = require('express');
var Application = express();
var bodyParser = require("body-parser");
var bookRouter = require("./Router/Books/books")
var userRouter = require("./Router/User/user")

Application.use(bodyParser.json());
Application.use(bodyParser.urlencoded({ extended : true }));
Application.use('/api/books', bookRouter);
Application.use("/api/user", userRouter);
Application.listen("3000", () => {
    console.log("App listening to 3000")
});

