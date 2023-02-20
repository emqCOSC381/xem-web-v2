const express = require("express")
const mongoose =require("mongoose")
const {item,cart} = require("../models/items")
const router = express.Router()


router.get("/",(req,res)=>{
    item.find().then((result)=>{
        res.render("index",{result})
    })
    
})

router.get("/quickview",(req,res)=>{
    id = req.query.id
    item.findById(id).then((result)=>{
        res.render("quickView",{result})
    }).catch((err)=>consle.log(err))
})

router.get("/cart",(req,res)=>{
    res.render("cart")
})

router.get("/addtocart",(req,res)=>{
    id = req.query.id
    console.log(id)



    
    
})


router.get("/useraccount",(req,res)=>{
    res.render("userAcount")
})
router.get("/admin",(req,res)=>{
    res.render("admin")
})

module.exports = router