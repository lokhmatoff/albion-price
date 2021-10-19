const router = require('express').Router();
const service = require('./service');
const validator = require('./validator');

router.get('/', validator, async (request, response) => {
    const { codes } = request.query;
    const data = await service.fetch(codes);

    return response.send(data);
});

module.exports = router;
