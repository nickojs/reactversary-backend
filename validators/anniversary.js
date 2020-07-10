const anniversarySchema = {
  name: {
    in: ['body'],
    isLength: {
      options: { min: 3 },
      errorMessage: 'name required'
    },
    trim: true
  },
  date: {
    in: ['body'],
    isDate: {
      errorMessage: 'invalid date'
    }
  },
  gift: {
    in: ['body'],
    isLength: {
      options: { min: 1 },
      errorMessage: 'gift required'
    },
    trim: true
  },
  location: {
    in: ['body'],
    isLength: {
      options: { min: 1 },
      errorMessage: 'location required'
    },
    trim: true
  }
};

module.exports = {
  anniversarySchema
};
