const mongoose = require('mongoose')

let productSchema = new mongoose.Schema({
  name: String,
  description: String,
  photos: [],
  price: Number,
  updated: {
    type: Date,
    default: Date.now
  }
})

let product = mongoose.model('Product', productSchema)

module.exports = product