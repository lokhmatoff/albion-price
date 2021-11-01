const express = require('express');
const app = express();

const swagger = require('./swagger');
const apiV1 = require('../app/v1');

// Middlewares
app.use(express.json());
app.use('/swagger', swagger);
app.use('/v1', apiV1);

app.listen(process.env.PORT || 3000);
