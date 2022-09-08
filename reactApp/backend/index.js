const express = require("express");
const app = express();
const cors = require("cors");
const crypto = require("crypto");

const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.json());

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "js_08_01"
})

connection.connect((error) => {
    if (error)
        throw error;
    console.log("Connected to the database");
})

app.post("/delete-customer", (req, res) => {
    const deleteQuery = "DELETE FROM customers WHERE id = ?";
    connection.query(deleteQuery, [req.body.deleteId], (error, results) => {
        if (error)
            throw error;
        res.send(JSON.stringify({
            "status": 200,
            "error": null,
            "response": "Customer ID : " + req.body.deleteId + " deleted!"
        }))
    })
})

app.get("/get-allCustomers", (req, res) => {
    const sqlQuery = "SELECT * FROM customers";
    connection.query(sqlQuery, (error, results) => {
        if (error)
            throw error;
        res.send(JSON.stringify({ "status": 200, "error": null, "response": { customers: results } }))
    })
})

app.post("/login", (req, res) => {
    const user = {
        username: req.body.username,
        password: req.body.pass
    }

    const sqlQuery = "SELECT * FROM users WHERE username = ?";
    connection.query(sqlQuery, [user.username], (error, results) => {
        let userExist = false;
        if (results[0] !== undefined) {
            const passhash = results[0].password;
            const salt = results[0].salt;
            const hashCal = crypto.pbkdf2Sync(user.password, salt, 1000, 64, 'sha512').toString("hex");
            userExist = hashCal === passhash;
        }
        res.send(JSON.stringify({
            "status": 200,
            "error": null,
            "userExist": userExist
        }))
    })
})


app.post("/register", (req, res) => {
    const user = {
        username: req.body.username,
        password: req.body.pass
    }

    let salt = crypto.randomBytes(16).toString("hex");
    const hash = crypto.pbkdf2Sync(user.password, salt, 1000, 64, 'sha512').toString("hex");

    const sqlQuery = "INSERT INTO users (username,password,salt) VALUES (?,?,?)";
    connection.query(sqlQuery, [user.username, hash, salt], (error, results) => {
        if (error)
            throw error;
        res.send(JSON.stringify({
            "status": 200,
            "error": null,
            "response": "User " + user.username + " created!"
        }))
    })
})

app.post("/add-customer", (req, res) => {
    const newCustomer = {
        firstname: req.body.name,
        lastname: req.body.lastname,
        phone: req.body.phone,
        email: req.body.email,
        vip: req.body.vip == "Yes" || req.body.vip === true ? 1 : 0
    };

    const sqlQuery = "INSERT INTO customers (firstname,lastname,email,phone,vip) VALUES (?,?,?,?,?)";
    connection.query(sqlQuery, [newCustomer.firstname, newCustomer.lastname,
        newCustomer.email, newCustomer.phone, newCustomer.vip
    ], (error, results) => {
        if (error)
            throw error;
        res.send(JSON.stringify({
            "status": 200,
            "error": null,
            "response": "Customer ID : " + results.insertId + " created!"
        }))
    })


    // fs.readFile('AllCustomers.json', "utf8", (err, data) => {
    //     const customers = JSON.parse(data);
    //     customers.customers.push(newCustomer);
    //     fs.writeFile('AllCustomers.json', JSON.stringify(customers, null, 3), function(err) {
    //         res.send("Customer is added");
    //     });
    // })
})

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})