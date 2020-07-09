const { validationResult } = require('express-validator');
const ErrorHandler = require('../models/http-error');

module.exports = {
  default: (req, res, next) => {
    const validation = validationResult(req);

    // get unique fields with error and its relative message
    const { errors } = validation;
    const errorsLength = errors.length;
    const errorsObj = { };

    // loop through the errors to generate an error object
    // with unique keys and all corresponding messages
    for (let i = 0; i < errorsLength; i++) {
      const currentMsg = errors[i].msg;
      const currentParam = errors[i].param;

      const checkExistingParam = Object
        .keys(errorsObj)
        .filter((key) => key === currentParam);

      if (checkExistingParam.length > 0) {
        const existingMsgs = errorsObj[currentParam];
        errorsObj[currentParam] = [...existingMsgs, currentMsg];
      } else {
        errorsObj[currentParam] = [currentMsg];
      }
    }

    if (errorsLength > 0) return res.status(422).json({ errors: errorsObj });

    next();
  },

  image: (req, res, next) => {
    if (!req.file) {
      return next(new ErrorHandler('No image provided', 422));
    }
    next();
  }
};
