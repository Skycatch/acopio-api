'use strict';

const Util = require('util');

const internals = {
  kDefaultAPIHost: 'localhost',

  log: Util.debuglog('acopio-api')
};

exports.register = function (server, options, next) {

  server.route({
    method: 'GET',
    path:'/',
    handler: (request, reply) => {

      return reply('hello world');
    }
  });

  next();
};

exports.register.attributes = {
  name: 'api'
};
