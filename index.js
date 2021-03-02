const express = require("express");
const path = require("path");
const morgan = require("morgan");
const { request } = require("express");
const { nextTick } = require("process");

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.get("/", (req, res) => {
    try {
        res.status(200).sendFile(path,join(__dirname, "/index.html"));
    }catch(error) {
        next(error);;
    }
});

app.post("/newsletter_signup", (req, res) => {
    let { body } = req;
    try {
        res.status(200).json(body);
    }catch(error) {
        next(error);
    }
})

app.put("/profile/:id", (req, res) => {
    try {
        let { id } = req.params;
        let { body } = request
        res.status(200).json({ id, body});
    }catch(error) {
        next(error);
    }
});

app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).json({ msg: "Server error"});
});


app.listen(3000, console.log('Listening ...'));

