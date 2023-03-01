const express = require("express")
const { item, cart } = require("../models/items")
const parent =require("../controllers/cart")
const { reset } = require("nodemon")
const router = express.Router()
router.get("/cart", async(req, res) => {
   
    total =0
    info=[]
    all_ids=[]
    filtered_ids=[]
    await cart.find().then(result=>{
        for (let i = 0; i < result.length; i++) {
            const element = result[i];
            total+=parseInt(element.item.price)
            all_ids.push(element.item.id)
        }
    }).catch((err) => console.log(err))
   parent.parent(filtered_ids,all_ids,info,res)
})


router.get("/addtocart", (req, res) => {
    id = req.query.id
    res.send(id)
    item.findById(id).then((result) => {
        data=new cart({item:result})
        data.save()
    }).catch((err) => console.log(err))

})

router.get("/updatecart", (req, res) => {
    cart.count({}, function (err, count) {
            var num = 0
            var num = count.toString(10)
            console.log(num)
            res.send(num)
        })
})



module.exports = router