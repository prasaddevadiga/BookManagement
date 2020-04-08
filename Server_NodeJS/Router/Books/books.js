var express = require("express");
const Router = express.Router();
const mysql = require("mysql");
const myConnection = require("../../connection");

Router.get("/", (req, res) => {
    myConnection.query("SELECT BookID, title, auther, description from books", (err, rows, fields) => {
        if (err) {
            console.log(err)
            res.send({"error": "Could not find any record"});
            return
        }
        res.send(rows)
    });
});

Router.get("/:name", (req, res) => {
    var sql = "SELECT * from books WHERE BookID =" + mysql.escape(req.params.name)
    myConnection.query(sql, (err, rows, fields) => {
        if (err) {
            console.log(err)
            res.send({"error": "Could not find any record"});
            return
        }
        res.send(rows)
    });
});

module.exports = Router;