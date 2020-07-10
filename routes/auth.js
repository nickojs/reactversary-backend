const express = require('express');
const { checkSchema } = require('express-validator');
const { signupSchema } = require('../validators/auth');
const validateResult = require('../helpers/validate-routes');

const Auth = require('../controllers/Auth');
const isAuth = require('../middlewares/is-auth');

const router = express.Router();

router.post('/signup',
  checkSchema(signupSchema),
  validateResult.default,
  Auth.signup);

router.post('/login', Auth.login);

// router.post('/reset-password/', Auth.setResetPasswordToken);

// router.post('/reset-password/:token',
//   [
//     // implement your own validation methods
//   ],
//   validateResult.default,
//   Auth.resetPassword);

// router.post('/rename-user', isAuth, Auth.renameUser);

module.exports = router;
