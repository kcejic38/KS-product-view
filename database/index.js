const Sequelize = require('sequelize');
const config = require('../config.js');

const db = new Sequelize('Products', 'root', config.pw, {
  host: 'localhost',
  dialect: 'mysql'
  }
)

module.exports.db = db;