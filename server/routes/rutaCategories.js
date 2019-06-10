const express = require('express')
const rutaCategories = express.Router()

rutaCategories.get('/', (req, res, next) => {
  res.send('Pagina de Categorias')
})

module.exports = rutaCategories