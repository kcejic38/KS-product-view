var seedData = require('../seedDataPSQL.js');

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  var timeStampOne = new Date(Date.now());
  console.log('Started seeding SHOES at: ', timeStampOne.toLocaleString())
  return knex('shoe').del()
    .then(function () {
      return knex.batchInsert('shoe', seedData.finalShoesArray, 100).then(function (rows) {
        var timeStampTwo = new Date(Date.now());
        console.log('Hooray! Finished seeding SHOES at: ', timeStampTwo.toLocaleString() + '!', 'Seeding took: ', ((timeStampTwo - timeStampOne) / 1000).toLocaleString(), 'seconds!')
      }).catch(function (error) {
        console.log(error)
      })
    });
};
