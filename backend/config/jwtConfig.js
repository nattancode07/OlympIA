require('dotenv').config();

module.exports = {
  secret: process.env.JWT_SECRET,
  expiresIn: '7d', // Token válido por 7 dias
};
