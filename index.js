const express = require("express");
const bodyparser = require("body-parser")
const mongoose = require('mongoose');


const dotenv =require("dotenv")

dotenv.config()
const app = express()

const route = require("./routes/index")
const test = require("./test/file")


app.use(express.static('public'));
app.use(bodyparser.json())
app.set("view engine","ejs")


app.use(route)
app.use(test)
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