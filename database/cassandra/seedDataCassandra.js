
var cassandra = require('cassandra-driver');

var images = [
  'https://s3-us-west-1.amazonaws.com/ks-product-view-images/Continental_80_Shoes_White_EE3831_06_standard.jpg',
  'https://s3-us-west-1.amazonaws.com/ks-product-view-images/Falcon_Shoes_White_EE4149_05_standard.jpg',
  'https://s3-us-west-1.amazonaws.com/ks-product-view-images/NMD_Runner_Shoes_Black_EE8933_05_standard.jpg',
  'https://s3-us-west-1.amazonaws.com/ks-product-view-images/Nite_Jogger_Shoes_White_CG5950_05_standard.jpg',
  'https://s3-us-west-1.amazonaws.com/ks-product-view-images/POD-S3_1_Shoes_White_CG6188_05_standard.jpg',
  'https://s3-us-west-1.amazonaws.com/ks-product-view-images/POD-S3_1_Shoes_White_G27946_05_standard.jpg',
  'https://s3-us-west-1.amazonaws.com/ks-product-view-images/Pureboost_Trainer_Shoes_Black_BB7218_05_standard.jpg',
  'https://s3-us-west-1.amazonaws.com/ks-product-view-images/SAMBAROSE_Shoes_White_EE9017_05_standard.jpg',
  'https://s3-us-west-1.amazonaws.com/ks-product-view-images/Superstar_Shoes_White_EE4023_05_standard.jpg',
  'https://s3-us-west-1.amazonaws.com/ks-product-view-images/Ultraboost_19_Shoes_Beige_F35284_05_standard.jpg',
  'https://s3-us-west-1.amazonaws.com/ks-product-view-images/Ultraboost_19_Shoes_Black_B75879_05_standard.jpg',
  'https://s3-us-west-1.amazonaws.com/ks-product-view-images/Cloudfoam_QT_Racer_Shoes_White_F34701_05_standard.jpg',
];
var shoes = [
  {
    color: 'OFF WHITE / ACTIVE RED / TRUE PINK',
    type: "Womens originals",
    model: 'Continental 80 Shoes',
    sizes: '6, 6.5, 7, 8, 8.5, 9, 9.5',
    price: 80,
    imagesurlsjsonarr: images[0],
    avg_stars: 4.9,
    review_count: 15
  }, {
    color: 'RUNNING WHITE / RAW WHITE / TRACE PINK',
    type: "Womens originals",
    model: 'Falcon Shoes',
    sizes: '6, 6.5, 7, 8, 8.5, 9, 9.5',
    price: 65,
    imagesurlsjsonarr: images[1],
    avg_stars: 4.5,
    review_count: 774
  }, {
    color: 'CORE BLACK / CARBON / RAW INDIGO',
    type: "Womens essentials",
    model: 'NMD Runner Shoes',
    sizes: '6, 6.5, 7, 8, 8.5, 9, 9.5',
    price: 130,
    imagesurlsjsonarr: images[2],
    avg_stars: 4.9,
    review_count: 4
  }, {
    color: 'CLOUD WHITE / CRYSTAL WHITE / CORE BLACK',
    type: 'Originals',
    model: 'Nite Jogger Shoes',
    sizes: '6, 6.5, 7, 8, 8.5, 9, 9.5',
    price: 130,
    imagesurlsjsonarr: images[3],
    avg_stars: 4.7,
    review_count: 81
  }, {
    color: 'RAW WHITE / RAW WHITE / HI-RES YELLOW',
    type: "Womens originals",
    model: 'POD-S3.1 Shoes',
    sizes: '6, 6.5, 7, 8, 8.5, 9, 9.5',
    price: 100,
    imagesurlsjsonarr: images[4],
    avg_stars: 4.3,
    review_count: 229
  }, {
    color: 'CLOUD WHITE / CLOUD WHITE / SHOCK RED',
    type: "Womens originals",
    model: 'POD-S3.1 Shoes',
    sizes: '6, 6.5, 7, 8, 8.5, 9, 9.5',
    price: 100,
    imagesurlsjsonarr: images[5],
    avg_stars: 4.3,
    review_count: 229
  }, {
    color: 'CORE BLACK / CORE BLACK / SOLID GREY',
    type: "Womens originals",
    model: 'Pureboost Trainer Shoes',
    sizes: '6, 6.5, 7, 8, 8.5, 9, 9.5',
    price: 120,
    imagesurlsjsonarr: images[6],
    avg_stars: 4.3,
    review_count: 11
  }, {
    color: 'CLOUD WHITE / SILVER METALLIC / CORE BLACK',
    type: "Womens originals",
    model: 'SAMBAROSE Shoes',
    sizes: '6, 6.5, 7, 8, 8.5, 9, 9.5',
    price: 100,
    imagesurlsjsonarr: images[7],
    avg_stars: 4.6,
    review_count: 485
  }, {
    color: 'CLOUD WHITE / CORE BLACK / CLOUD WHITE',
    type: "Womens originals",
    model: 'Superstar Shoes',
    sizes: '6, 6.5, 7, 8, 8.5, 9, 9.5',
    price: 100,
    imagesurlsjsonarr: images[8],
    avg_stars: 4,
    review_count: 1
  }, {
    color: 'CLEAR BROWN / CLOUD WHITE / LEGEND INK',
    type: "Womens running",
    model: 'Ultraboost 19 Shoes',
    sizes: '6, 6.5, 7, 8, 8.5, 9, 9.5',
    price: 180,
    imagesurlsjsonarr: images[9],
    avg_stars: 4.5,
    review_count: 14
  }, {
    color: 'CORE BLACK / GREY / GREY',
    type: "Womens running",
    model: 'Ultraboost 19 Shoes',
    sizes: '6, 6.5, 7, 8, 8.5, 9, 9.5',
    price: 180,
    imagesurlsjsonarr: images[10],
    avg_stars: 4.5,
    review_count: 14
  }, {
    color: 'Cloud White, Cloud White, Grey',
    type: "Womens essentials",
    model: 'Cloudfoam QT Racer Shoes',
    sizes: '6, 6.5, 7, 8, 8.5, 9, 9.5',
    price: 65,
    imagesurlsjsonarr: images[11],
    avg_stars: 4.7,
    review_count: 133
  }
]


const fs = require('fs');
const pathToFile = __dirname + '/cassandra.csv'
function writeAllCQLQueries() {
  //empty the file first
  fs.writeFileSync(pathToFile, 'id|model|avg_stars|color|imagesurlsjsonarr|price|review_count|sizes|type\n')

  var TEN_MILLION = 10000000;
  var quotient = Math.ceil(TEN_MILLION / shoes.length); //833,334
  //12 unique shoe entries repeated 833,334 times will give 10,000,008 records

  var breakPoint = 0;
  var agregateQuery = '';
  for (var j = 0; j < quotient; j++) {
    breakPoint++;
    for (var j = 0; j < shoes.length; j++) {
      agregateQuery += '"' + 
              (cassandra.types.Uuid.random()) + '"|' +
        '"' + shoes[j].model + '"|' +
              shoes[j].avg_stars + '|' +
        '"' + shoes[j].color + '"|' +
        '"' + shoes[j].imagesurlsjsonarr + '"|' +
              shoes[j].price + '|' +
              shoes[j].review_count + '|' +
        '"' + shoes[j].sizes + '"|' +
        '"' + shoes[j].type + '"\n'

      // when we reach 1000 iterations, write to file and reset string to ensure JS doesnt run out of memory
      if (breakPoint >= 1000) {
        fs.appendFileSync(pathToFile, agregateQuery)
        breakPoint = 0;
        agregateQuery = '';
      }
    }
  }
}
console.time('writeAllCQLQueries');

writeAllCQLQueries();

console.timeEnd('writeAllCQLQueries');

//takes about 98.4 seconds  to run this function