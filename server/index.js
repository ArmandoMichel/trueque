const mongoose = require('mongoose')
const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')

const rutas = require('./routes/')

// INCICIALIZACION
const app = express()


// MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/server/api', rutas)

mongoose.connect("mongodb://localhost:27017/ventas")
  .then(() => console.log(" Felicitaciones conexion a los Datos exitosamente"))
  .catch(err => console.log("error en la conexion a la Base de Datos", err))


// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
