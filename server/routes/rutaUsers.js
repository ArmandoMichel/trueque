const Users = require('../controllers/usersController')
const express = require('express')
const rutaUsers = express.Router()


rutaUsers.route('/')
  .get(Users.listarUsuarios)
  .post(Users.crearUsuarios)

rutaUsers.route('/:id')
  .get(Users.verUsuario)
  .put(Users.modificarUsuario)
  .delete(Users.eliminarUsuario)

// rutaUsers.get('/', async (req, res) => {
//   const users = await User.find().sort('name');
//   res.send(users);
// });

// rutaUsers.post('/', async (req, res) => {
//   // const { error } = validate(req.body);
//   // if (error) return res.status(400).send(error.details[0].message);

//   console.log(req.body)

//   let user = new User({
//     name: req.body.name,
//     email: req.body.email,
//     password: req.body.password,
//     photo: req.body.photo,
//     phone: req.body.phone
//   });
//   user = await user.save();

//   res.send(user);
// });

// rutaUsers.put('/:id', async (req, res) => {
//   // const { error } = validate(req.body);
//   // if (error) return res.status(400).send(error.details[0].message);

//   const user = await User.findByIdAndUpdate(req.params.id,
//     {
//       name: req.body.name,
//       email: req.body.email,
//       password: req.body.password,
//       photo: req.body.photo,
//       phone: req.body.phone
//     }, { new: true });

//   if (!user) return res.status(404).send('The user with the given ID was not found.');

//   res.send(user);
// });

// rutaUsers.delete('/:id', async (req, res) => {
//   const user = await User.findByIdAndRemove(req.params.id);

//   if (!user) return res.status(404).send('The user with the given ID was not found.');

//   res.send(user);
// });

// rutaUsers.get('/:id', async (req, res) => {
//   const user = await User.findById(req.params.id);

//   if (!user) return res.status(404).send('The user with the given ID was not found.');

//   res.send(user);
// });

module.exports = rutaUsers