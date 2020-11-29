const express = require('express');
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "POST, PATCH, OPTIONS"
    );
    next();
});

app.post("/api/employees", (req, res, next) => {
    const employee = req.body;
    console.log(employee);
    res.status(201).json({
        message : "Employee added successfully"
    });
});

module.exports = app;