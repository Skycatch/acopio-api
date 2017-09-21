'use strict';

exports.register = function (server, options, next) {

  server.route({
    method: 'POST',
    path: '/v1/acopios',
    config: {
      auth: 'jwt',
      description: 'Crea un nuevo centro de acopio',
      notes: 'Agrega un centro de acopio nuevo',
      tags: ['api'],
      plugins: {
        'hapi-swagger': {
          security: [{ jwt: [] }]
        }
      }
    },
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
