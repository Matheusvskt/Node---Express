var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var aluno = require("./Routes/aluno")



app.use(bodyParser.urlencoded())

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.use("/aluno", aluno);

const PORT = 5000;
app.listen(PORT, () => {
console.log(`Server rodando na porta: ${PORT}`)
})

