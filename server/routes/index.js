const express = require('express')
const rutaHome = express.Router()

rutaHome.get('/', (req, res, next) => {
  res.send(" Esta es la ruta HOME")
})

module.exports = rutaHome