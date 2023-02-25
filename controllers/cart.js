
const { item, cart } = require("../models/items")
const occurences=(arr,value)=>{
    var count = 0;
    arr.forEach(item => {
        (item===value && count++)
    })
    return {id:value,count:count}
}

const parent=async(filtered_ids,all_ids,info,res)=>{
    var num =await cart.countDocuments()
    for (let i = 0; i < all_ids.length; i++) {
        if(filtered_ids.includes(all_ids[i])==false){
            filtered_ids.push(all_ids[i])
            const flag_id =occurences(all_ids,all_ids[i]).id
            await cart.findOne({ 'item._id': `${flag_id}` }).then(result=>{
                info.push({count:occurences(all_ids,all_ids[i]).count, result:result})
            }).catch((err)=>{
                console.log(err)
            })
        }
    }
    return res.render("cart",{info,total,num})
}
module.exports={parent:parent}