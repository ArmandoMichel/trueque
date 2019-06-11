const mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    maxlength: 255
  },
  password: {
    type: String,
    required: true,
    maxlength: 1024,
  },
  photo: [],
  phone: String,
  updated: {
    type: Date,
    default: Date.now
  }
})

let user = mongoose.model('User', userSchema)

module.exports = user