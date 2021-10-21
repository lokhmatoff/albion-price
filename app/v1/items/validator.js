const validator = (request, response, next) => {
    if (Object.keys(request.query).length > 0) {
        return response.status(400).send({
            success: false,
            data: null,
            error: 'ValidationError: no GET parameters allowed.',
        });
    }

    return next();
};

module.exports = validator;
