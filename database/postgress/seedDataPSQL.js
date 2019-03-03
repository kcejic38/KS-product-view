const images = [
  {
    urls: JSON.stringify([
      'https://s3-us-west-1.amazonaws.com/ks-product-view-images/Continental_80_Shoes_White_EE3831_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/ks-product-view-images/Continental_80_Shoes_White_EE3831_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/ks-product-view-images/Continental_80_Shoes_White_EE3831_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/ks-product-view-images/Continental_80_Shoes_White_EE3831_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/ks-product-view-images/Continental_80_Shoes_White_EE3831_06_standard.jpg'
    ])
  },
  {
    urls: JSON.stringify([
      'https://s3-us-west-1.amazonaws.com/ks-product-view-images/Falcon_Shoes_White_EE4149_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/ks-product-view-images/Falcon_Shoes_White_EE4149_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/ks-product-view-images/Falcon_Shoes_White_EE4149_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/ks-product-view-images/Falcon_Shoes_White_EE4149_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/ks-product-view-images/Falcon_Shoes_White_EE4149_05_standard.jpg'
    ])
  },
  {
    urls: JSON.stringify([
      'https://s3-us-west-1.amazonaws.com/ks-product-view-images/NMD_Runner_Shoes_Black_EE8933_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/ks-product-view-images/NMD_Runner_Shoes_Black_EE8933_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/ks-product-view-images/NMD_Runner_Shoes_Black_EE8933_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/ks-product-view-images/NMD_Runner_Shoes_Black_EE8933_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/ks-product-view-images/NMD_Runner_Shoes_Black_EE8933_05_standard.jpg'
    ])
  },
  {
    urls: JSON.stringify([
      'https://s3-us-west-1.amazonaws.com/ks-product-view-images/Nite_Jogger_Shoes_White_CG5950_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/ks-product-view-images/Nite_Jogger_Shoes_White_CG5950_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/ks-product-view-images/Nite_Jogger_Shoes_White_CG5950_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/ks-product-view-images/Nite_Jogger_Shoes_White_CG5950_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/ks-product-view-images/Nite_Jogger_Shoes_White_CG5950_05_standard.jpg'
    ])
  },
  {
    urls: JSON.stringify([
      'https://s3-us-west-1.amazonaws.com/ks-product-view-images/POD-S3_1_Shoes_White_CG6188_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/ks-product-view-images/POD-S3_1_Shoes_White_CG6188_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/ks-product-view-images/POD-S3_1_Shoes_White_CG6188_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/ks-product-view-images/POD-S3_1_Shoes_White_CG6188_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/ks-product-view-images/POD-S3_1_Shoes_White_CG6188_05_standard.jpg'
    ])
  },
  {
    urls: JSON.stringify([
      'https://s3-us-west-1.amazonaws.com/ks-product-view-images/POD-S3_1_Shoes_White_G27946_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/ks-product-view-images/POD-S3_1_Shoes_White_G27946_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/ks-product-view-images/POD-S3_1_Shoes_White_G27946_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/ks-product-view-images/POD-S3_1_Shoes_White_G27946_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/ks-product-view-images/POD-S3_1_Shoes_White_G27946_05_standard.jpg'
    ])
  },
  {
    urls: JSON.stringify([
      'https://s3-us-west-1.amazonaws.com/ks-product-view-images/Pureboost_Trainer_Shoes_Black_BB7218_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/ks-product-view-images/Pureboost_Trainer_Shoes_Black_BB7218_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/ks-product-view-images/Pureboost_Trainer_Shoes_Black_BB7218_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/ks-product-view-images/Pureboost_Trainer_Shoes_Black_BB7218_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/ks-product-view-images/Pureboost_Trainer_Shoes_Black_BB7218_05_standard.jpg'
    ])
  },
  {
    urls: JSON.stringify([
      'https://s3-us-west-1.amazonaws.com/ks-product-view-images/SAMBAROSE_Shoes_White_EE9017_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/ks-product-view-images/SAMBAROSE_Shoes_White_EE9017_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/ks-product-view-images/SAMBAROSE_Shoes_White_EE9017_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/ks-product-view-images/SAMBAROSE_Shoes_White_EE9017_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/ks-product-view-images/SAMBAROSE_Shoes_White_EE9017_05_standard.jpg'
    ])
  },
  {
    urls: JSON.stringify([
      'https://s3-us-west-1.amazonaws.com/ks-product-view-images/Superstar_Shoes_White_EE4023_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/ks-product-view-images/Superstar_Shoes_White_EE4023_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/ks-product-view-images/Superstar_Shoes_White_EE4023_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/ks-product-view-images/Superstar_Shoes_White_EE4023_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/ks-product-view-images/Superstar_Shoes_White_EE4023_05_standard.jpg'
    ])
  },
  {
    urls: JSON.stringify([
      'https://s3-us-west-1.amazonaws.com/ks-product-view-images/Ultraboost_19_Shoes_Beige_F35284_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/ks-product-view-images/Ultraboost_19_Shoes_Beige_F35284_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/ks-product-view-images/Ultraboost_19_Shoes_Beige_F35284_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/ks-product-view-images/Ultraboost_19_Shoes_Beige_F35284_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/ks-product-view-images/Ultraboost_19_Shoes_Beige_F35284_05_standard.jpg'
    ])
  },
  {
    urls: JSON.stringify([
      'https://s3-us-west-1.amazonaws.com/ks-product-view-images/Ultraboost_19_Shoes_Black_B75879_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/ks-product-view-images/Ultraboost_19_Shoes_Black_B75879_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/ks-product-view-images/Ultraboost_19_Shoes_Black_B75879_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/ks-product-view-images/Ultraboost_19_Shoes_Black_B75879_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/ks-product-view-images/Ultraboost_19_Shoes_Black_B75879_05_standard.jpg'
    ])
  },
  {
    urls: JSON.stringify([
      'https://s3-us-west-1.amazonaws.com/ks-product-view-images/Cloudfoam_QT_Racer_Shoes_White_F34701_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/ks-product-view-images/Cloudfoam_QT_Racer_Shoes_White_F34701_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/ks-product-view-images/Cloudfoam_QT_Racer_Shoes_White_F34701_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/ks-product-view-images/Cloudfoam_QT_Racer_Shoes_White_F34701_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/ks-product-view-images/Cloudfoam_QT_Racer_Shoes_White_F34701_05_standard.jpg'
    ])
  }
]
const shoes = [

  {
    color: 'OFF WHITE / ACTIVE RED / TRUE PINK',
    type: 'Women\'s originals',
    model: 'Continental 80 Shoes',
    sizes: "6, 6.5, 7, 8, 8.5, 9, 9.5",
    price: 80,
    image_id: 1,
    avg_stars: 4.9,
    review_count: 15
  },
  {
    color: 'RUNNING WHITE / RAW WHITE / TRACE PINK',
    type: 'Women\'s originals',
    model: 'Falcon Shoes',
    sizes: "6, 6.5, 7, 8, 8.5, 9, 9.5",
    price: 65,
    image_id: 2,
    avg_stars: 4.5,
    review_count: 774
  },
  {
    color: 'CORE BLACK / CARBON / RAW INDIGO',
    type: 'Women\'s essentials',
    model: 'NMD Runner Shoes',
    sizes: "6, 6.5, 7, 8, 8.5, 9, 9.5",
    price: 130,
    image_id: 3,
    avg_stars: 4.9,
    review_count: 4
  },
  {
    color: 'CLOUD WHITE / CRYSTAL WHITE / CORE BLACK',
    type: 'Originals',
    model: 'Nite Jogger Shoes',
    sizes: "6, 6.5, 7, 8, 8.5, 9, 9.5",
    price: 130,
    image_id: 4,
    avg_stars: 4.7,
    review_count: 81
  },
  {
    color: 'RAW WHITE / RAW WHITE / HI-RES YELLOW',
    type: 'Women\'s originals',
    model: 'POD-S3.1 Shoes',
    sizes: "6, 6.5, 7, 8, 8.5, 9, 9.5",
    price: 100,
    image_id: 5,
    avg_stars: 4.3,
    review_count: 229
  },
  {
    color: 'CLOUD WHITE / CLOUD WHITE / SHOCK RED',
    type: 'Women\'s originals',
    model: 'POD-S3.1 Shoes',
    sizes: "6, 6.5, 7, 8, 8.5, 9, 9.5",
    price: 100,
    image_id: 6,
    avg_stars: 4.3,
    review_count: 229
  },
  {
    color: 'CORE BLACK / CORE BLACK / SOLID GREY',
    type: 'Women\'s originals',
    model: 'Pureboost Trainer Shoes',
    sizes: "6, 6.5, 7, 8, 8.5, 9, 9.5",
    price: 120,
    image_id: 7,
    avg_stars: 4.3,
    review_count: 11
  },
  {
    color: 'CLOUD WHITE / SILVER METALLIC / CORE BLACK',
    type: 'Women\'s originals',
    model: 'SAMBAROSE Shoes',
    sizes: "6, 6.5, 7, 8, 8.5, 9, 9.5",
    price: 100,
    image_id: 8,
    avg_stars: 4.6,
    review_count: 485
  },
  {
    color: 'CLOUD WHITE / CORE BLACK / CLOUD WHITE',
    type: 'Women\'s originals',
    model: 'Superstar Shoes',
    sizes: "6, 6.5, 7, 8, 8.5, 9, 9.5",
    price: 100,
    image_id: 9,
    avg_stars: 4,
    review_count: 1
  },
  {
    color: 'CLEAR BROWN / CLOUD WHITE / LEGEND INK',
    type: 'Women\'s running',
    model: 'Ultraboost 19 Shoes',
    sizes: "6, 6.5, 7, 8, 8.5, 9, 9.5",
    price: 180,
    image_id: 10,
    avg_stars: 4.5,
    review_count: 14
  },
  {
    color: 'CORE BLACK / GREY / GREY',
    type: 'Women\'s running',
    model: 'Ultraboost 19 Shoes',
    sizes: "6, 6.5, 7, 8, 8.5, 9, 9.5",
    price: 180,
    image_id: 11,
    avg_stars: 4.5,
    review_count: 14
  },
  {
    color: 'Cloud White, Cloud White, Grey',
    type: 'Women\'s essentials',
    model: 'Cloudfoam QT Racer Shoes',
    sizes: "6, 6.5, 7, 8, 8.5, 9, 9.5",
    price: 65,
    image_id: 12,
    avg_stars: 4.7,
    review_count: 133
  }
]

const finalShoesArray = [];
const finalImagesArray = [];
const TEN_MILLION = 10000000; //10,000,000 

while (finalShoesArray.length < TEN_MILLION && finalImagesArray.length < TEN_MILLION) {
  shoes.forEach((shoe) => finalShoesArray.push(shoe))
  images.forEach((image) => finalImagesArray.push(image))
}
for (var i = 1; i <= TEN_MILLION; i++) {
  finalShoesArray[i].image_id = i;
}

module.exports.finalShoesArray = finalShoesArray
module.exports.finalImagesArray = finalImagesArray