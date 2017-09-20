'use strict';

const Getenv = require('getenv2');

exports.port = Getenv('ACOPIO_API_PORT', 9999);

exports.auth0 = {
  clientId: Getenv('AUTH0_CLIENT'),
  clientSecret: Getenv('AUTH0_CLIENT_SECRET'),
  domain: Getenv('AUTH0_DOMAIN', 'acopio-api.auth0.com')
};

exports.mysql = {
  database: Getenv('ACOPIO_API_MYSQL_DATABASE', 'acopiodb'),
  host: Getenv('ACOPIO_API_MYSQL_HOST', 'localhost'),
  port: Getenv('ACOPIO_API_MYSQL_PORT', 3306),
  password: Getenv('ACOPIO_API_MYSQL_PASSWORD', ''),
  user: Getenv('ACOPIO_API_MYSQL_USER', 'acopio')
};
