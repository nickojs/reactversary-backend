const User = require('../models/User');

const locateEmail = async (email, { req }) => {
  const { id } = req.body;
  // checks for an id and switches to 'update' validation
  if (id) {
    const user = await User.findOne({
      where: {
        id,
        email
      }
    });
    /*
      bails the validation if the email already belongs
      to the user that are currently trying to update his data
    */
    if (user) return;
  }
  // 'signup' validation
  const user = await User.findOne({ where: { email } });
  if (user) return Promise.reject();
};

const signupSchema = {
  name: {
    in: ['body'],
    isLength: {
      options: { min: 4 },
      errorMessage: 'Nome deveria ser maior'
    },
    trim: true
  },
  password: {
    in: ['body'],
    isLength: {
      options: { min: 8, max: 20 },
      errorMessage: 'Senha muito curta'
    },
    matches: {
      options: /([0-9].*[a-zA-Z])|([a-zA-Z].*[0-9])/,
      errorMessage: 'Senha tem que ter pelo menos uma letra e um número'
    }
  },
  email: {
    in: ['body'],
    isEmail: true,
    errorMessage: 'Email inválido',
    custom: {
      options: locateEmail,
      errorMessage: 'Email em uso'
    },
    trim: true
  }
};

const loginSchema = {
  password: {
    in: ['body'],
    isLength: {
      options: { min: 8, max: 20 },
      errorMessage: 'Tamanho de senha inválido'
    }
  },
  email: {
    in: ['body'],
    isEmail: true,
    errorMessage: 'Email inválido'
  }
};

module.exports = {
  signupSchema,
  loginSchema
};
