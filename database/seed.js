const Sequelize = require('sequelize');
const config = require('../config.js');
const Data = require('./fakeData.js');
const faker = require('faker');

const sequelize = new Sequelize('', config.user, config.pw, {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize.query('CREATE DATABASE Products').then(()=> {
  const db = new Sequelize('Products', config.user, config.pw, {
    host: 'localhost',
    dialect: 'mysql'
    }
  )

  const Images = db.define('images', {
    img_id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    links: {type: Sequelize.TEXT}
  })

  const Shoes = db.define('shoes', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    colors: { type: Sequelize.STRING, allowNull: false},
    type: { type: Sequelize.STRING, allowNull: false},
    model: { type: Sequelize.STRING, allowNull: false},
    sizes: { type: Sequelize.STRING, allowNull: false},
    price: { type: Sequelize.INTEGER, allowNull: false},
    image_ID: { type: Sequelize.INTEGER,
      references: {
          model: Images,
          key: 'img_id'
        }
    },
    review_count: { type: Sequelize.INTEGER, allowNull: false},
    avg_stars: { type: Sequelize.INTEGER, allowNull: false}
  });

  Images.sync()
    .then(() => {
      Images.create({links: Data.shoeLink1.join('***')});
      Images.create({links: Data.shoeLink2.join('***')});
      Images.create({links: Data.shoeLink3.join('***')});
    })
    .then(()=>{
      Shoes.sync()
      .then(()=>{
        Shoes.create({
          colors: Data.product1.color,
          type: Data.product1.type,
          model: Data.product1.model,
          sizes: Data.product1.sizes,
          price: Data.product1.price,
          image_ID: Data.product1.image_ID,
          review_count: Data.product1.review_count,
          avg_stars: Data.product1.avg_stars
        });
        Shoes.create({
          colors: Data.product2.color,
          type: Data.product2.type,
          model: Data.product2.model,
          sizes: Data.product2.sizes,
          price: Data.product2.price,
          image_ID: Data.product2.image_ID,
          review_count: Data.product2.review_count,
          avg_stars: Data.product2.avg_stars
        });
        Shoes.create({
          colors: Data.product3.color,
          type: Data.product3.type,
          model: Data.product3.model,
          sizes: Data.product3.sizes,
          price: Data.product3.price,
          image_ID: Data.product3.image_ID,
          review_count: Data.product3.review_count,
          avg_stars: Data.product3.avg_stars
        });
        for (let i = 0; i < 100; i++){
          Shoes.create({
            colors: faker.commerce.color(),
            type: faker.lorem.words(),
            model: faker.commerce.productName(),
            sizes: faker.random.number(),
            price: faker.commerce.price(),
            image_ID: Math.ceil(Math.random()*3),
            review_count: faker.random.number(),
            avg_stars: Math.random()*5
          })
        }
      })

    })

})

