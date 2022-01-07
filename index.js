const express = require('express');
const path = require("path");

const app = express();

app.use("/meusite",express.static(path.join(__dirname, 'client')));

app.get("/",(req, res)=>{
    //res.set("Content-Type", "text/html")
    res.type("html")

    res.send("<h1>Hello word from GET</h1>")
})

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on Port: ${PORT}`)
})