const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON requests

// Routes
app.use('/users', require('./routes/users'));
app.use('/products', require('./routes/products'));

// Custom 404 page
app.use((req, res, next) => {
  res.status(404).send('Custom 404 Page');
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listenning to port 3000`);
});
