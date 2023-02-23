const express = require("express")
const mongoose = require("mongoose")
const { item, cart } = require("../models/items")
const router = express.Router()
const request = require("request")


router.get("/", (req, res) => {
    item.find().then((result) => {
        cart.count({}, function (err, count) {
            console.log("Number of users:", count);
            var num = 0
            var num = count.toString(10)
            res.render("index", { result, num })

        })
    })
})
router.get("/quickview", (req, res) => {
    id = req.query.id
    item.findById(id).then((result) => {
        res.render("quickView", { result })
    }).catch((err) => console.log(err))
})


function reused(){
            
}



router.get("/removefromcart",(req,res)=>{
    id = req.query.id
    res.send(id )
    cart.deleteOne({ id: id }).then(function(){
        console.log("Data deleted"); // Success









    }).catch(function(error){
        console.log(error); // Failure
    });

})






router.get("/cart", (req, res) => {
    var infoq = []
    var info_unfiltered = []
    var info_filtered = []
    var stats_master = []
    cart.find().then(async (cart_result) => {
        try{const count = await cart.countDocuments();var num = count.toString(10)
        for(var i =0;i<cart_result.length;i++){
            let dup = info_unfiltered.includes(cart_result[i].id)
            info_unfiltered.push(cart_result[i].id)
            if(dup==false){
                info_filtered.push(cart_result[i].id)
            }
        }
        const occurence=(key,arr)=>arr.reduce((counter,currentNumber)=>(key===currentNumber?counter+1:counter),0)
        for(var i =0;i<info_filtered.length;i++){
            var master=occurence(info_filtered[i],info_unfiltered)
            stats_master.push({count:master,id:info_filtered[i]})
        }
        for(var j=0;j<info_filtered.length;j++){
            var cart_item = await item.findById(info_filtered[j]);
            infoq.push(cart_item)
        }
        res.render("cart", {num,infoq,stats_master})}catch (err){console.log(err)}
        })
    })









    


var i = 0;
router.get("/addtocart", (req, res) => {
    item_id = req.query.id
    product = new cart({
        id: item_id
    })
    product.save().then((result) => {
        console.log(result)
    }).catch((err) => console.log(err))
    res.send("200")



})


router.get("/updatecart", (req, res) => {
    cart.count({}, function (err, count) {
        console.log("Number of users:", count);
        var num = 0
        var num = count.toString(10)
        res.send(num)
    })
})
router.get("/admin", (req, res) => {
    res.render("admin")

})

module.exports = router