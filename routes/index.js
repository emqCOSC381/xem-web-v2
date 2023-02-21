const express = require("express")
const mongoose =require("mongoose")
const {item,cart} = require("../models/items")
const router = express.Router()


router.get("/",(req,res)=>{
    item.find().then((result)=>{
        cart.count({}, function( err, count){
            console.log( "Number of users:", count );
            var num=0
            var num = count.toString(10)
        res.render("index",{result,num})

        })
    })
})
router.get("/quickview",(req,res)=>{
    id = req.query.id
    item.findById(id).then((result)=>{
        res.render("quickView",{result})
    }).catch((err)=>console.log(err))
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
    res.send("200")



})


router.get("/updatecart",(req,res)=>{
    cart.count({}, function( err, count){
        console.log( "Number of users:", count );
        var num=0
        var num = count.toString(10)
        res.send(num)
    })
})
router.get("/admin",(req,res)=>{
    res.render("admin")
})

module.exports = router