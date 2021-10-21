const router = require('express').Router();
const service = require('./service');
const validator = require('./validator');

router.get('/', validator, async (_, response) => {
    const data = await service.fetch();

    if (data.error) response.status(500);
    return response.send(data);
});

module.exports = router;
