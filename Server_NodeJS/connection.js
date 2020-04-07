var mysql = require('mysql')

var myConnection = mysql.createConnection ({
    host: "localhost",
    database: "BookManagement",
    user: "root",
    password: "admin123",
    multipleStatements: true
})
 
myConnection.connect( (error) =>{
    if (error) {
        console.log("Error occured"+ error);
    } else {
        console.log("Connection successful");
    }
});

module.exports = myConnection 