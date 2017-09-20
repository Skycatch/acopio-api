'use strict';

exports.register = function (server, options, next) {

  server.route({
    method: 'GET',
    path: options.baseurl || '/v1' + '/health/check',
    config: {
      auth: false
    },
    handler: function (req, reply) {

      reply({
        data: {
          state: 'healthy'
        }
      });
    }
  });
  next();
};

exports.register.attributes = {
  name: 'healthcheck'
};
