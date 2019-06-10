const express = require('express')
const rutaUsers = express.Router()

rutaUsers.get('/', (req, res, next) => {
  res.send('Pagina de Usuarios')
})

module.exports = rutaUsers