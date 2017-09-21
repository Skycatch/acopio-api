'use strict';

exports.register = function (server, options, next) {

  server.route({
    method: 'GET',
    path: '/v1/acopios',
    config: {
      auth: false,
      description: 'Devuelve una lista de los centros de acopio',
      notes: 'Lista de centros de acopio disponibles',
      tags: ['api']
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
