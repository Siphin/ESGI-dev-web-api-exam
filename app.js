const express = require('express');
const userRoutes = require('./routes/user-routes.js');

const app = express();

app.use('/api', userRoutes);

app.listen(3000, () => {
  console.log('Le server écoute sur le port 3000');
});