const api = require('express').Router();

const items = require('./items');
const prices = require('./prices');
api.use('/items', items);
api.use('/prices', prices);

module.exports = api;
