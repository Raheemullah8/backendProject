const cookieParser = require("cookie-parser");
const express = require("express");
const path = require('path')
const app = express();
const ownerRoute = require('./routes/owner-router')
const productRoute = require('./routes/product-router')
const userRoute = require('./routes/user-router')

const db = require('./config/mongoose-connection')

app.set("view engine", "ejs")
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname ,"public")));
app.use(cookieParser())

app.use('/owner',ownerRoute)
app.use('/user',userRoute)
app.use('/product',productRoute)

app.listen(3000)                   