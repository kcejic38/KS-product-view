const express = require('express');
const knex = require('../database/postgres/index.js');
const bodyParser = require('body-parser')
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/../public'));
app.use(express.json());

bodyParser.urlencoded({ extended: true })
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/shoe', (req, res) => {
  knex.raw(`SELECT * FROM shoe LIMIT 100`)
    .then((oneHundredShoes) => {
      res.send(oneHundredShoes.rows);
    })
});

app.get('/shoe/:shoeId', (req, res) => {
  const { shoeId } = req.params;
  knex.raw(`SELECT * FROM shoe WHERE id=${shoeId}`)
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

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})

module.exports = app;