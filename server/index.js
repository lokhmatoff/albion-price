const express = require('express');
const app = express();

const items = require('../app/items');
const prices = require('../app/prices');

// Middlewares
app.use(express.json());
app.use('/items', items);
app.use('/prices', prices);

// Routes
app.get('/', (_, r) => r.send({ data: 'hello world' }));

app.listen(3000);
