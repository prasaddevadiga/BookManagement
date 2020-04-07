var express = require("express");
const Router = express.Router();
const mysql = require("mysql");
var Cryptr = require('cryptr');             // this is used to encrypt the password

const myConnection = require("../connection");

Router.post('/register', (req, res) => {
    var today = new Date()
    var users = {
        "name" : req.body.name,
        "email": req.body.email,
        "password": req.body.password,
        "created_at": today,
        "updated_at": today
    }
    myConnection.query("INSERT INTO users SET ?", users, (err, rows, fields) => {
        if (err) {
            res.json({"status": false, "message": "There are some error with query"})
            return
        }
        res.json({"status": true, "message": "User registered successfully"})
    })
});

Router.post('/login', (req, res) => {

});

module.exports = Router;