const express = require("express")
const bcrypt= require("bcrypt")
const user= require("../models/user")
const router = express.Router()
const {hash_password,validate} =require("../controllers/auth")


router.get("/login", (req, res) => {
    res.render("auth/login")
})
router.post("/loginform", (req, res) => {
    console.log(req.body)
    validate(req.body.email,req.body.password,req,res)

})
router.post("/signupform", (req, res) => {
    username = req.body.name
    email = req.body.email
    password =req.body.password
    hash_password(username,email,password,req,res)

})
router.get("/useraccount",(req,res)=>{
    console.log("-----",req.session.loggedIn)
    if (req.session.loggedIn==true) {
        res.render("userAccount")
} else {
    res.redirect('/login');
}
 
})
module.exports = router