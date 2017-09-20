'use strict';

exports.register = function (server, options, next) {

  server.route({
    method: 'POST',
    path: '/v1/acopios',
    handler: function (req, reply) {

      // TODO
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
  name: 'acopios-post'
};
