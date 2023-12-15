const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('GET /users');
});

router.post('/', (req, res) => {
 
  const user = req.body;
  res.send(`POST /users - User: ${JSON.stringify(user)}`);
});

module.exports = router;
