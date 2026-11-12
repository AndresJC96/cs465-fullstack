
const mongoose = require('mongoose');
const passport = require('passport');

const User = mongoose.model('User');

const register = async (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.password) {
    return res.status(400).json({
      message: 'All fields are required.'
    });
  }

  try {
    const user = new User();

    user.name = req.body.name;
    user.email = req.body.email;
    user.setPassword(req.body.password);

    await user.save();

    const token = user.generateJWT();

    return res.status(200).json({ token });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({
        message: 'Email already registered.'
      });
    }

    return res.status(500).json({
      message: 'Registration failed.'
    });
  }
};

const login = (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({
      message: 'All fields are required.'
    });
  }

  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.status(401).json(info);
    }

    const token = user.generateJWT();

    return res.status(200).json({ token });
  })(req, res, next);
};

module.exports = {
  register,
  login
};
