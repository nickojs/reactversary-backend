const express = require('express');
const { checkSchema } = require('express-validator');
const { anniversarySchema } = require('../validators/anniversary');
const validateResult = require('../helpers/validate-routes');

const isAuth = require('../middlewares/is-auth');
const Anniversary = require('../controllers/Anniversary');

const router = express.Router();

router.get('/birthdates', isAuth, Anniversary.getBirthdates);

router.delete('/birthdate/:id', isAuth, Anniversary.deleteBirthdate);

router.post('/save-birthdate',
  isAuth,
  checkSchema(anniversarySchema),
  validateResult.default,
  Anniversary.saveBirthday);

router.put('/update-birthdate/:id',
  isAuth,
  // checkSchema(anniversarySchema),
  // validateResult.default,
  Anniversary.updateBirthdate);

module.exports = router;
