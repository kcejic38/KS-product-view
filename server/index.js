const express = require('express');
const db = require('../database/index.js');

const app = express();
const port = 8002;

app.use(express.static(__dirname + '/../public'));
app.use(express.json());

app.get('/products', (req, res) => {
  let model = req.body.model;

  db.findall({
    where: {
      model: model
    }
  })
  .then((data) => {
    res.json(data);
  })
})

app.get('/images', (req, res) => {
  let imageID = req.body.imageID;

})



app.listen(port, ()=>{
  console.log(`listening on port ${port}`);
})
