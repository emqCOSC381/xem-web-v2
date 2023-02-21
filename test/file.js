const express = require("express")
const mongoose =require("mongoose")
const {item} = require("../models/items")
const router = express.Router()
router.get("/save",(req,res)=>{
    item.insertMany([
        {name:"name 1",image_url:"./images/hero1.jpg",price:122,primary:"women",tags:["najs", "naxj"]},
        {name:"name 2",image_url:"./images/hero2.jpg",price:243,primary:"men",tags:["najs", "naxj"]},
        {name:"name 3",image_url:"./images/hero3.jpg",price:143,primary:"men",tags:["najs", "naxj"]},
        {name:"name 4",image_url:"./images/slide1.jpg",price:123,primary:"shoes",tags:["najs", "naxj"]},
        {name:"name 5",image_url:"./images/slide2.jpg",price:52,primary:"watch",tags:["najs", "naxj"]},
        {name:"name 6",image_url:"./images/slide3.jpg",price:213,primary:"women",tags:["najs", "naxj"]},
        {name:"name 7",image_url:"./images/hero1.jpg",price:2121,primary:"shoes",tags:["najs", "naxj"]},
    ]).then((result)=>res.send(result)).catch((err)=>res.send(err))

})
router.get("/clean",(req,res)=>{

    item.deleteMany({},(err)=>{
        if(err){
            console.log(err)
        }else{
            res.send("done")
        }
    })
})

module.exports = router


