'use strict';

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
