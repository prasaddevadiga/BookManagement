var express = require("express");
const Router = express.Router();
const mysql = require("mysql");
var Cryptr = require('cryptr');             // this is used to encrypt the password

const myConnection = require("../connection");

Router.post('/register', (req, res) => {
    var users = { "name" : req.body.name, "email": req.body.email, "password": req.body.password, "created_at": Date(), "updated_at": Date() }
    myConnection.query("SELECT * from users WHERE email = ? ", req.body.email,  (err, results, fields) => {
        if (err) throw err;
        if (results.length > 0) {
            res.json({ "status" : false, "message": req.body.email + " already in use" })
            return
        }

        myConnection.query("INSERT INTO users SET ?", users, (err, rows, fields) => {
            if (err) {
                res.json({"status": false, "message": "There are some error with query"})
                return
            }
            res.json({"status": true, "message": "User registered successfully"})
        })
    })
});

Router.post('/login', (req, res) => {
    myConnection.query("SELECT * from users WHERE email = ? ", [req.body.email],  (err, results, fields) => {
        if (err) throw err;
        if (results.length == 0) {
            res.json({ "status" : false, "message": "User not registered" })
            return
        }
        if (results[0].password != req.body.password) {
            res.json({ "status" : false, "message": "Password entered is incorrect" })
            return
        }
        res.json({ "status" : true, "message": "Successfully logged in" })
    });
});

module.exports = Router;