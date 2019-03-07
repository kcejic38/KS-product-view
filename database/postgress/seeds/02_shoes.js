var seedData = require('../seedDataPSQL.js');

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  var timeStampOne = new Date(Date.now());
  console.log('Started seeding shoes at: ', timeStampOne.toLocaleString())
  return knex('shoe').del()
    .then(function () {
      return knex.batchInsert('shoe', seedData.finalShoesArray, 100).then(function (rows) {
        var timestampTwo = new Date(Date.now());
        console.log('Hooray! Finished seeding shoes at: ', timestampTwo.toLocaleString())
      }).catch(function (error) {
        console.log(error)
      })
    });
};
