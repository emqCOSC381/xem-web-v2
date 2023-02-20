const mongoose = require('mongoose');
const item = require("../models/items")
const allItems=()=>{
           const product= item.find().then((result)=>{}).catch((err)=>console.log(err))
        
}

module.exports = {allItems}