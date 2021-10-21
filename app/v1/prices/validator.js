const validator = (request, response, next) => {
    if (!request.query.codes) {
        return response.status(400).send({
            success: false,
            data: null,
            error: 'ValidationError: GET param "codes" must be set.',
        });
    }

    if (!(request.query.codes.split(',') instanceof Array)) {
        return response.status(400).send({
            success: false,
            data: null,
            error: 'ValidationError: GET param "codes" must be an array of codes.',
        });
    }

    if ((request.query.codes.split(',').length > 20)) {
        return response.status(414).send({
            success: false,
            data: null,
            error: 'ValidationError: Too many "codes" provided.',
        });
    }

    return next();
};

module.exports = validator;
