const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const db = require("./database");
const routes = require("./router");

db();
const app = express();
app.use(express.json());


app.get("/", (req, res)=>{
    res.status(200).send("<h1>Hello World</h1>")
})

app.use('/product', routes)

app.listen(3500,()=>{
    console.log("server is up on http://localhost:3500");
});
