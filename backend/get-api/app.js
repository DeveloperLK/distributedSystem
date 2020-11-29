const express = require("express");

const app = express();

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


app.get("/api/employee", (req, res, next) => {
    
    const employee = [
        {
            emplyeeId: "E0001",
            employeeName: "Sahan",
            department: "Fernando",
            dateOfJoin: "12-12-2012"
        },
        {   
            emplyeeId: "E0001",
            employeeName: "Sahan",
            department: "Fernando",
            dateOfJoin: "12-12-2012"
        }
    ]
    res.status(200).json({
        message: "Employees fetched sucessfully!",
        employees: employee
    });
});

module.exports = app;