const express = require("express");
const mongoose = require("mongoose");
const app = express();
const {restrictToLoggedinUserOnly} = require("./middlewares/auth")
const cookieParser = require("cookie-parser")

const userRoute = require("./route/user");
const urlRoute = require("./route/url");
const staticRoute = require("./route/static");

mongoose.connect("mongodb://127.0.0.1:27017/urlshortner").then(()=>console.log("mongo connected"))

app.listen(process.env.port || 5000, console.log("server has started"));

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));
app.use(cookieParser());

app.use("/",staticRoute);
app.use("/user", userRoute);
app.use("/shortUrls",restrictToLoggedinUserOnly, urlRoute);






