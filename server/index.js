const express = require('express');
const app = express();

// Middlewares
app.use(express.json());

// Routes
app.get('/', (_, r) => r.send({ data: 'hello world' }));

app.listen(3000);
