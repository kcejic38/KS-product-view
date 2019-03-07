var seedData = require('../seedDataPSQL.js');

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('shoe').del()
    .then(function () {
      return knex.batchInsert('shoe', seedData.finalShoesArray, 1000).then(function (rows) {
        console.log('Hooray!')
      }).catch(function (error) {
        console.log(error)
      })
    });
};
