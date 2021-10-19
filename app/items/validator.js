const validator = (request, response, next) => {
    if (Object.keys(request.query).length > 0) {
        return response.status(422).send({
            success: false,
            message: 'ValidationError: no GET parameters allowed.',
        });
    }

    return next();
};

module.exports = validator;
