const router = require('express').Router();
const swaggerJSDoc = require('swagger-jsdoc');
const swagger = require('swagger-ui-express');
const swaggerDefinition = require('../swagger/v1.json');

const swaggerOptions = {  
    swaggerDefinition,
    apis:['../app/v1.js'],
}  
const swaggerDocs = swaggerJSDoc(swaggerOptions);  
router.use('/', swagger.serve, swagger.setup(swaggerDocs));

module.exports = router;
