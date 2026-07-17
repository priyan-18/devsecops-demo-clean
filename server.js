const express = require("express");
const { exec } = require("child_process");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello DevSecOps!");
});


app.get("/run", (req, res) => {
    const cmd = req.query.cmd;

    exec(cmd, (err, stdout, stderr) => {
        if (err) {
            return res.status(500).send(stderr);
        }

        res.send(stdout);
    });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});