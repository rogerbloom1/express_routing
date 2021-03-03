const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.get("/", (req, res, next) => {
    try {
    res.status(200).sendFile(path.join(__dirname, "./index.html"))
    } catch (error) {
        next(error);
    }
});

app.get("/about", (req, res, next) => {
    try {
    res.status(200).sendFile(path.join(__dirname, "./index.html"))
    } catch (error) {
        next(error);
    }
});

app.get("/help", (req, res, next) => {
    try {
    res.status(200).sendFile(path.join(__dirname, "./index.html"))
    } catch (error) {
        next(error);
    }
});

app.get("*", (req, res, next) => {
    try {
        res.status(404).sendFile(path.join(_dirname, "./404.html"));
    } catch (error) {
        next(error);
    }
    });

app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).json({ name: err.name, msg: err.message || msg: "Server error"});
});

app.listen(3000, console.log('Listening ...'));

