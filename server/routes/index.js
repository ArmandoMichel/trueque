const express = require('express')
const rutaHome = express.Router()

const rutaUsers = require('./rutaUsers')
const rutaProducts = require('./rutaProducts')
const rutaCategories = require('./rutaCategories')

rutaHome.get('/', (req, res, next) => {
  res.send(" Esta es la ruta HOME")
})

rutaHome.use('/users', rutaUsers)
rutaHome.use('/products', rutaProducts)
rutaHome.use('/categories', rutaCategories)

module.exports = rutaHome