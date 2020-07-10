const express = require('express');
const { checkSchema } = require('express-validator');
const { signupSchema } = require('../validators/auth');
const validateResult = require('../helpers/validate-routes');
const isAuth = require('../middlewares/is-auth');

const router = express.Router();

router.post('/save-birthdate',
  validateResult.default,
  (req, res, next) => {
    res.status(200).json({ message: 'ok' });
  });

module.exports = router;
