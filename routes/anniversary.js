const express = require('express');
const { checkSchema } = require('express-validator');
const { anniversarySchema } = require('../validators/anniversary');
const validateResult = require('../helpers/validate-routes');
const isAuth = require('../middlewares/is-auth');

const User = require('../models/User');

const router = express.Router();

router.post('/save-birthdate',
  isAuth,
  checkSchema(anniversarySchema),
  validateResult.default,
  async (req, res, next) => {
    const { userId } = req;
    const {
      name, date, gift, location
    } = req.body;

    const user = await User.getUserById(userId);

    const birthday = {
      name, date, gift, location
    };

    // user.addAnniversary(birthday);
    // user.save();

    res.status(200).json({ message: 'ok', user: req.userId });
  });

module.exports = router;
