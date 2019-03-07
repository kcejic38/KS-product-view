const config = require('./config.js');

module.exports = {


  development: {
    client: 'postgresql',
    connection: {
      host: config.host,
      port: config.port,
      database: 'template1',
      user: config.user, 
      password: config.pw,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/database/postgress/migrations'
    },
    seeds: {
      directory: __dirname + '/database/postgress/seeds'
    }
  },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'ks-abibas-product-view',
  //     user: 'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

};