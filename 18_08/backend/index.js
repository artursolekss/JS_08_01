const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.get("/get-allCustomer", (req, res) => {
    fs.readFile('AllCustomers.json', "utf8", (err, data) => {
        res.send(JSON.stringify({ "status": 200, "error": null, "response": JSON.parse(data) }))
    })
})

app.post("/add-customer", (req, res) => {
    const newCustomer = {
        firstname: req.body.name,
        lastname: req.body.lastname,
        phone: req.body.phone,
        email: req.body.email
    };

    fs.readFile('AllCustomers.json', "utf8", (err, data) => {
        const customers = JSON.parse(data);
        customers.customers.push(newCustomer);
        fs.writeFile('AllCustomers.json', JSON.stringify(customers, null, 3), function(err) {
            res.send("Customer is added");
        });
    })
})

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})