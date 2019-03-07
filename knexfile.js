const config = require('./config.js');

const URL = 'postgres://' + config.user + ':' + config.password + '@' + config.host + '/' + config.database;

module.exports = {
  development: {
    client: 'postgresql',
    connection: URL,
    migrations: {
      directory: __dirname + '/database/postgress/migrations'
    },
    seeds: {
      directory: __dirname + '/database/postgress/seeds'
    }
  }

};