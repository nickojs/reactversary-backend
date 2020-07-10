const Sequelize = require('sequelize');
const database = require('../config/database');
const ErrorHandler = require('./http-error');

const Anniversary = database.define('Anniversary', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false
  },
  gift: {
    type: Sequelize.STRING,
    allowNull: false
  },
  location: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, { tableName: 'anniversaries' });

Anniversary.getBirthdateById = async (id) => {
  const birthdate = await Anniversary.findByPk(id);
  if (!birthdate) throw new ErrorHandler('Not found', 404);
  return birthdate;
};

module.exports = Anniversary;
