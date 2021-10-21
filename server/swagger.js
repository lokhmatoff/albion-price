const router = require('express').Router();
const swagger = require('swagger-ui-express');
const swaggerDefinition = require('../swagger/v1.json');

router.use('/', swagger.serve, swagger.setup(swaggerDefinition));

module.exports = router;
