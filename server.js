const express = require('express');
const app = express();
const PORT = 3000;

const connection = require('./db-connection');

app.get('/solutions', (req, res) => {
  // console.log('Test data handling');
  connection.getSolutions();
});

app.listen(PORT, () => { console.log(`app listening at Port ${PORT}`)});