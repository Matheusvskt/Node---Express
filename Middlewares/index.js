const express = require('express');
const app = express();
var bodyParser = require("body-parser");




let consoleBody = (req, res, next) =>{
    console.log(req.body)
    next()
}

let hello = ((req, res)=>{
    //res.set("Content-Type", "text/html")
res.send('Hello World 2')
})

app.use("/", bodyParser.json());
app.use("/", consoleBody);
app.get("/", hello);
app.post("/", hello);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on Port: ${PORT}`)
})