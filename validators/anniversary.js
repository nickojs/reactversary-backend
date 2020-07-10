const anniversarySchema = {
  name: {
    in: ['body'],
    required: {
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
    required: {
      errorMessage: 'gift required'
    },
    trim: true
  },
  location: {
    in: ['body'],
    required: {
      errorMessage: 'location required'
    },
    trim: true
  }
};

module.exports = {
  anniversarySchema
};
