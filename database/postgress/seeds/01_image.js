var seedData = require('../seedDataPSQL.js');

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  var timeStampOne = new Date(Date.now());
  console.log('Started seeding IMAGES at: ', timeStampOne.toLocaleString())
  return knex('image').del()
    .then(function () {
      return knex.batchInsert('image', seedData.finalImagesArray, 100).then(function (rows) {
        var timeStampTwo = new Date(Date.now());
        console.log('Hooray! Finished seeding IMAGES at:  ', timeStampTwo.toLocaleString())
      }).catch(function (error) {
        console.log(error)
      })
    });
};
