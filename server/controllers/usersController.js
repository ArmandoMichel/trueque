const User = require('../models/usersModel')



exports.listarUsuarios = async (req, res) => {
  const users = await User.find().sort('name');
  res.send(users);
};

exports.crearUsuarios = async (req, res) => {
  // const { error } = validate(req.body);
  // if (error) return res.status(400).send(error.details[0].message);

  console.log(req.body)

  let user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    photo: req.body.photo,
    phone: req.body.phone
  });
  user = await user.save();

  res.send(user);
};

exports.modificarUsuario = async (req, res) => {
  // const { error } = validate(req.body);
  // if (error) return res.status(400).send(error.details[0].message);

  const user = await User.findByIdAndUpdate(req.params.id,
    {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      photo: req.body.photo,
      phone: req.body.phone
    }, { new: true });

  if (!user) return res.status(404).send('The user with the given ID was not found.');

  res.send(user);
};

exports.eliminarUsuario = async (req, res) => {
  const user = await User.findByIdAndRemove(req.params.id);

  if (!user) return res.status(404).send('The user with the given ID was not found.');

  res.send(user);
};

exports.verUsuario = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) return res.status(404).send('The user with the given ID was not found.');

  res.send(user);
};
