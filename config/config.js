'use strict';

const Getenv = require('getenv2');

exports.port = Getenv('ACOPIO_API_PORT', 9999);

exports.auth0 = {
  audience: Getenv('AUTH0_AUDIENCE', 'https://acopio-api.skycatch.net'),
  clientId: Getenv('ACOPIO_API_AUTH0_CLIENT'),
  clientSecret: Getenv('ACOPIO_API_AUTH0_CLIENT_SECRET'),
  domain: Getenv('ACOPIO_API_AUTH0_DOMAIN', 'acopio-api.auth0.com'),
  jwksUri: Getenv('ACOPIO_API_AUTH0_DOMAIN', 'https://acopio-api.auth0.com/.well-known/jwks.json')
};

exports.mysql = {
  database: Getenv('ACOPIO_API_MYSQL_DATABASE', 'acopiodb'),
  host: Getenv('ACOPIO_API_MYSQL_HOST', 'localhost'),
  port: Getenv('ACOPIO_API_MYSQL_PORT', 3306),
  password: Getenv('ACOPIO_API_MYSQL_PASSWORD', ''),
  user: Getenv('ACOPIO_API_MYSQL_USER', 'acopio')
};
