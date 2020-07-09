const Sequelize = require('sequelize');
const database = require('../config/database');
const ErrorHandler = require('./http-error');

const User = database.define('User', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  resetToken: Sequelize.STRING,
  resetTokenData: Sequelize.DATE
}, { tableName: 'users' });

User.getUserById = async (id) => {
  const user = await User.findByPk(id);
  if (!user) throw new ErrorHandler('Couldn\'t find user', 404);
  return user;
};

User.getUserByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  if (!user) throw new ErrorHandler('Couldn\'t find user', 404);
  return user;
};

module.exports = User;
