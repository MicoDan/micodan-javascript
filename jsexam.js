const express = require('express');
const app = express();
const port = 3000;

app.get('/addition', (req, res)) =>{
  const numbers = req.query.numbers;
  if (!numbers) {
    return res.status(400).send({ error: 'numbers is required' });
  }
  const sum = numbers.split(',').reduce((a, b) => a + Number(b), 0);
 
}