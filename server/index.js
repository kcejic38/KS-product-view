require('newrelic');
const express = require('express');
const knex = require('../database/postgres/index.js');
const bodyParser = require('body-parser')
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/../public'));
app.use(express.json());

bodyParser.urlencoded({ extended: true })
app.use(bodyParser.json())

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// });

//SELECT color, type, model, sizes, price, image_id, avg_stars, review_count, SUBSTRING(image.urls, 0, 15) AS image_urls FROM shoe INNER JOIN image ON shoe.image_id=image.id WHERE shoe.model='Ultraboost 19 Shoes' LIMIT 1;

app.get('/loaderio-6041c8c8eaacf008b60025f3cf35c446', (req, res) => {
  res.send('loaderio-6041c8c8eaacf008b60025f3cf35c446');
});

app.get('/shoe', (req, res) => {
  knex.raw(`SELECT * FROM shoe LIMIT 100`)
    .then((oneHundredShoes) => {
      res.send(oneHundredShoes.rows);
    })
});

app.get('/shoe/:shoeId', (req, res) => {
  const { shoeId } = req.params;
  knex.raw(`SELECT color, type, model, sizes, price, image_id, avg_stars, review_count, image.urls AS image_urls FROM shoe INNER JOIN image ON shoe.image_id=image.id WHERE shoe.id=${shoeId}`)
    .then((shoe) => {
      res.send(shoe.rows);
    })
});


/* 
  req.body must always have the format of shoe, for example:
    {
      color: 'OFF WHITE / ACTIVE RED / TRUE PINK',
      type: 'Women\'s originals',
      model: 'Continental 80 Shoes',
      sizes: "6, 6.5, 7, 8, 8.5, 9, 9.5",
      price: 80,
      image_id: 1,
      avg_stars: 4.9,
      review_count: 15
    }
*/
app.post('/shoe', (req, res) => {
  knex('shoe').insert(req.body).returning('shoe')
    .then((shoe) => {
      res.send(shoe);
    })
});

app.put('/shoe/:shoeId', (req, res) => {
  const { shoeId } = req.params;
  knex('shoe')
    .where('id', shoeId)
    .update(req.body)
    .returning('shoe')
    .then((shoe) => {
      res.send(shoe);
    })
});

app.delete('/shoe/:shoeId', (req, res) => {
  const { shoeId } = req.params;
  knex.raw(`DELETE FROM shoe WHERE id=${shoeId}`)
    .then(() => {
      res.send('Shoe successfully deleted!');
    })
});


app.get('/images', (req, res) => {
  const { imageID } = req.query;
  knex.raw(`SELECT * FROM image WHERE id=${imageID}`)
    .then((image) => {
      res.json(image.rows[0].urls.split('***'));
    })
})

app.get('*', (req, res) => {
  // console.log('serving GET request on path: ', req.path)
  res.send('ok')
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})

module.exports = app;