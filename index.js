const express = require("express");
const bodyparser = require("body-parser")
const mongoose = require('mongoose');
const session = require('express-session');
const dotenv =require("dotenv")
dotenv.config()
const app = express()

app.use(express.static('public'));
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }));
app.set("view engine","ejs")

app.use(session({
  secret: process.env.SESSION_KEY,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 3600000*(24*30),
  }
}));
// Routes
const route = require("./routes/index")
const test = require("./test/file")
const cart =require("./routes/cart")
const auth =require("./routes/auth")
app.use(route)
app.use(test)
app.use(cart)
app.use(auth)

// Initiliaze database
mongoose.set('strictQuery',true)
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then((result)=>{
    console.log("Database connected. . .");
}
).catch((err)=>console.log(err))
app.listen(process.env.PORT||60607,()=>{
  console.log(`Express server listening on port: ${process.env.PORT}`)
})
