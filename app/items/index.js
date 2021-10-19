const router = require('express').Router();
const service = require('./service');
const validator = require('./validator');

router.get('/', validator, async (_, response) => {
    const data = await service.fetch();

    return response.send(data);
});

module.exports = router;
