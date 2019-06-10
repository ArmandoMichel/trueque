const express = require('express')
const rutaProducts = express.Router()

rutaProducts.get('/', (req, res, next) => {
  res.send('Pagina de los Productos')
})

module.exports = rutaProducts