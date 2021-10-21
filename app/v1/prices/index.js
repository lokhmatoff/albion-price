const router = require('express').Router();
const service = require('./service');
const validator = require('./validator');

router.get('/', validator, async (request, response) => {
    const { codes } = request.query;
    const data = await service.fetch(codes);

    if (data.error) response.status(500);
    return response.send(data);
});

module.exports = router;
