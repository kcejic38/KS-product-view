var seedData = require('../seedDataPSQL.js');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('image').del()
    .then(function () {
      return knex.batchInsert('image', seedData.finalImagesArray, 1000).then(function (rows) {
        console.log('Hooray!')
      }).catch(function(error) {
        console.log(error)
      })
    });
};
