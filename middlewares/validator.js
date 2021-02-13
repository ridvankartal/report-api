// Validate request body according to given schema
const validator = (schema, property) => {
    return (req, res, next) => {
        const { error } = schema.validate(req[property]);
        const valid = error == null;

        if (valid) {
            next();
        } else {
            res.status(400)

                .json({
                    code: -1,
                    msg: error.details[0].message.replace(/\"/g, '')
                });
        }
    }
}
module.exports = validator;