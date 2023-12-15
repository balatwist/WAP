const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('GET /products');
});

router.post('/', (req, res) => {
  // Handle POST request for products
  const product = req.body;
  res.send(`POST /products - Product: ${JSON.stringify(product)}`);
});

module.exports = router;
