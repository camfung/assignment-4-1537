const express = require("express");
const app = express();
app.use(express.json());
const fs = require("fs");

app.use("/js", express.static("./public/js"));
app.use("/css", express.static("./public/css"));
app.use("/img", express.static("./public/img"));

app.get("/", function (req, res) {
    let doc = fs.readFileSync("./app/html/index2.html", "utf-8")
    res.send(doc);
});

let port = 8000;
app.listen(port, function () {
    console.log("example app listening on port: " + port)
});
