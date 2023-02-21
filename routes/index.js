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
var i =0;
router.get("/addtocart",(req,res)=>{
    item_id = req.query.id
    product = new cart({
        id:item_id
    })
    product.save().then((result)=>{
        console.log(result)
    }).catch((err)=>console.log(err))
    res.send("fdf")



})


router.get("/updatecart",(req,res)=>{
    res.send("userAcount")
})
router.get("/admin",(req,res)=>{
    res.render("admin")
})

module.exports = router