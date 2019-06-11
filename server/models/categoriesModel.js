const mongoose = require('mongoose')

let categoriesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50
  },
  description: String
})

let categories = mongoose.model('Product', categoriesSchema)