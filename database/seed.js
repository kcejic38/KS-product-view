const Sequelize = require('sequelize');
const sequelize = new Sequelize('', 'root', 'jojojo95', {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize.query('CREATE DATABASE Products').then(()=> {
  const db = new Sequelize('Products', 'root', 'jojojo95', {
    host: 'localhost',
    dialect: 'mysql'
    }
  )


  const Shoes = shoes.define('shoes', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    colors: { type: Sequelize.STRING, allowNull: false},
    type: { type: Sequelize.STRING, allowNull: false},
    model: { type: Sequelize.STRING, allowNull: false},
    sizes: { type: Sequelize.STRING, allowNull: false},
    price: { type: Sequelize.INTEGER, allowNull: false},
    images: ,
    review_count: { type: Sequelize.INTEGER, allowNull: false},
    avg_stars: { type: Sequelize.INTEGER, allowNull: false},
  });

  Shoes.sync()
  .Shoes(()=>{
    User.create({
      username: 'test',
      birthday: new Date(1980, 3, 2)
    })
  })

})



