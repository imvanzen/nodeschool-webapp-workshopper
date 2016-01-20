'use strict';

const HOST = '127.0.0.1';
const PORT = 3000;
const IS_PROD = process.env.NODE_ENV === 'production';

module.exports = {
  HOST,
  PORT,
  IS_PROD
};
