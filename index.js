const cookieParser = require("cookie-parser");
const express = require("express");
const path = require('path')
const app = express();

const db = require('./config/mongoose-connection')

app.set("view engine", "ejs")
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname ,"public")));
app.use(cookieParser())
app.use('/',(req,res)=>{
    res.send('hello')
})
app.listen(3000)