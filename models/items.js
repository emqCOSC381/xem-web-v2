const mongoose = require('mongoose');
const product = new mongoose.Schema({
    name:{
      required:true,
      type:String
    },
    image_url: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true
    },
    primary:{
      type:String,
      required:true
    },
    tags:{
        type:[String],
        required:true
    }
  });
  const cart_ =new mongoose.Schema({
    item: {
      type: {
        name: {
          type: String,
          required: true
        },
        image_url: {
          type: String,
          required: true
        },
        price: {
          type: Number,
          required: true
        },
        primary: {
          type: String,
          required: true
        },
        tags: {
          type: [String],
          required: true
        }
      },
      required: true
    },
    

  })

const  item = mongoose.model('item', product);
const  cart = mongoose.model('cart', cart_);

  module.exports = {item,cart};