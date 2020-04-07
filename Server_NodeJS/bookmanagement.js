var express = require('express');
var Application = express();
var bodyParser = require("body-parser");
var bookRouter = require("./Router/books")

Application.use(bodyParser.json());
Application.use(bodyParser.urlencoded({ extended : true }));
Application.use('/book', bookRouter);

Application.listen("3000")

