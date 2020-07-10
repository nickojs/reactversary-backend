const User = require('../models/User');
const An = require('../models/Anniversary');
const ErrorHandler = require('../models/http-error');

class Anniversary {
  async saveBirthday(req, res, next) {
    const { userId } = req;
    const {
      name, date, gift, location
    } = req.body;

    try {
      const birthday = {
        name, date, gift, location
      };

      const user = await User.getUserById(userId);
      await user.createAnniversary(birthday);

      res.status(200).json({ message: 'ok' });
    } catch (error) {
      next(error);
    }
  }

  async deleteBirthdate(req, res, next) {
    const { id } = req.params;

    try {
      const anniversary = await An.getBirthdateById(id);
      await anniversary.destroy();

      res.status(200).json({ message: 'deleted successfully' });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new Anniversary();
