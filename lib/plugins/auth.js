'use strict';

const HapiJwt = require('hapi-auth-jwt2');
const Jwks = require('jwks-rsa');
const Config = require('settings-module');

const internals = {};

exports.register = function (server, options, next) {

  const validate = function (decoded, request, callback) {

    console.log('Decodes', decoded);
    const clientId = decoded.sub.split('@')[0];
    if (clientId !== undefined) {
      return callback(null, true, decoded);
    }

    callback(new Error('Error while parsing token'), false);
  };

  server.register(HapiJwt, (err) => {

    if (err) {
      console.error(err);
      throw err;
    }

    server.auth.strategy('jwt', 'jwt', {
      complete: true,
      key: Jwks.hapiJwt2Key({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: Config.get('auth0').jwksUri
      }),
      validateFunc: validate,
      verifyOptions: {
        audience: Config.get('auth0').audience,
        issuer: 'https://' + Config.get('auth0').domain + '/',
        algorithms: ['RS256']
      }
    });

    next();
  });
};

exports.register.attributes  = {
  name: 'jwt-auth'
};
