module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host: process.env.RDS_HOSTNAME || 'localhost',
      // port: process.env.RDS_PORT,
      database: 'ks-abibas-product-view',
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/database/migrations'
    },
    seeds: {
      directory: __dirname + '/database/seeds'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'ks-abibas-product-view',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};