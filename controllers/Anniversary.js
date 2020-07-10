const User = require('../models/User');
const An = require('../models/Anniversary');

class Anniversary {
  async getBirthdates(req, res, next) {
    const { userId } = req;

    try {
      const user = await User.getUserById(userId);
      const anniversaries = await user.getAnniversaries();

      res.status(200).json({ birthdates: anniversaries });
    } catch (error) {
      next(error);
    }
  }

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

      res.status(201).json({ message: 'ok' });
    } catch (error) {
      next(error);
    }
  }

  async deleteBirthdate(req, res, next) {
    const { id } = req.params;

    try {
      const instance = await An.getBirthdateById(id);
      await instance.destroy();

      res.status(200).json({ message: 'deleted successfully' });
    } catch (error) {
      next(error);
    }
  }

  async updateBirthdate(req, res, next) {
    const { id } = req.params;
    const {
      name, date, gift, location
    } = req.body;

    try {
      const instance = await An.getBirthdateById(id);

      instance.name = name;
      instance.date = date;
      instance.gift = gift;
      instance.location = location;

      await instance.save();
      res.status(201).json({ message: instance });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new Anniversary();
