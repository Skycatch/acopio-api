'use strict';

const Getenv = require('getenv2');

exports.mysql = {
  database: Getenv('ACOPIO_API_MYSQL_DATABASE'),
  host: Getenv('ACOPIO_API_MYSQL_HOST'),
  password: Getenv('ACOPIO_API_MYSQL_PASSWORD'),
  user: Getenv('ACOPIO_API_MYSQL_USER')
};
