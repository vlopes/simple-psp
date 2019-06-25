const errorHandler = (err, req, res, next) => {
    if (err.error && err.error.isJoi) {
        res.status(400).json({
            type: err.error.name,
            message: err.error.details[0].message
        });
    } else {
        next(err);
    }
}

module.exports = errorHandler