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
router.get("/removefromcart",(req,res)=>{
    id=req.query.id
    cart.deleteOne({_id:id}).then((result)=>{
        res.send("200")
    }).catch((err)=>{
        console.log(err)
    })

})
router.get("/addtocart", (req, res) => {
    id = req.query.id
    plus = req.query.plus
    if(plus){
        item.findById(id).then((result) => {
            data=new cart({item:result})
            data.save()
        }).catch((err) => console.log(err))
        res.redirect("cart")
    }else{
    res.send("plus")
    item.findById(id).then((result) => {
        data=new cart({item:result})
        data.save()
    }).catch((err) => console.log(err))
}
})
const delete_many=async (res,compare_id)=>{
    var dup_ids=[]
    var real_ids=[]
    await cart.find({}).then((result)=>{
        for (let i = 0; i < result.length; i++) {
            var _id_=result[i].item._id;
            if(_id_==compare_id){
                real_ids.push(result[i]._id)
            }
        }
    })
    for (let f = 0; f < real_ids.length; f++) {
        await cart.deleteOne({_id:real_ids[f]}).then(()=>{
        }).catch((err)=>{
            console.log(err)
        })
    }
    res.redirect("cart")
}

router.get("/delete_many",(req,res)=>{
    id=req.query.id
    delete_many(res,id)
})
router.get("/logout",(req,res)=>{
      req.session.destroy();
  res.redirect('/');
})
router.get("/updatecart", (req, res) => {
    cart.count({}, function (err, count) {
            var num = 0
            var num = count.toString(10)
            res.send(num)
        })
})



module.exports = router