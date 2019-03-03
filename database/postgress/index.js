const Sequelize = require('sequelize');
const config = require('../config.js');

const db = new Sequelize('Products', config.user, config.pw, {
  host: 'localhost',
  dialect: 'mysql'
}
)

const Images = db.define('images', {
  img_id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  links: { type: Sequelize.TEXT }
})

const Shoes = db.define('shoes', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  colors: { type: Sequelize.STRING, allowNull: false },
  type: { type: Sequelize.STRING, allowNull: false },
  model: { type: Sequelize.STRING, allowNull: false },
  sizes: { type: Sequelize.STRING, allowNull: false },
  price: { type: Sequelize.INTEGER, allowNull: false },
  image_ID: {
    type: Sequelize.INTEGER,
    references: {
      model: Images,
      key: 'img_id'
    }
  },
  review_count: { type: Sequelize.INTEGER, allowNull: false },
  avg_stars: { type: Sequelize.INTEGER, allowNull: false }
})

const DB = {
  db,
  Shoes,
  Images
}
module.exports = DB;