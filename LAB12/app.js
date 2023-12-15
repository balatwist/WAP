const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); 


app.use('/users', require('./users'));
app.use('/products', require('./products'));


app.use((req, res, next) => {
  res.status(404).send('Custom 404 Page');
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});


app.listen(port, () => {
  console.log(`Server is listenning to port 3000`);
});
