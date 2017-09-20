'use strict';

exports.register = function (server, options, next) {

  server.route({
    method: 'GET',
    path: '/v1/acopios',
    config: {
      auth: false
    },
    handler: function (req, reply) {

      reply({
        data: {
          sucess: true
        }
      });
    }
  });
  next();
};

exports.register.attributes  = {
  name: 'acopios-get'
};
