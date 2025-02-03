const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const register = async (userData) => {
  userData.password = await bcrypt.hash(userData.password, 10);
  return await User.create(userData);
};

const login = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user || !await bcrypt.compare(password, user.password)) throw new Error('Identifiants invalides');

  const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
  return { token, user };
};

module.exports = { register, login };
