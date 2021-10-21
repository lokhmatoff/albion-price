const express = require('express');
const app = express();

const swagger = require('./swagger');
const items = require('../app/items');
const prices = require('../app/prices');

// Middlewares
app.use(express.json());
app.use('/', swagger);
app.use('/items', items);
app.use('/prices', prices);

app.listen(3000);
