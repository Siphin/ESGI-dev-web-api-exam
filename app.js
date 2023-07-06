const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user-routes.js');

const app = express();

app.use(bodyParser.json());

app.use('/api', userRoutes);

app.listen(3000, () => {
  console.log('Le serveur écoute sur le port 3000');
});