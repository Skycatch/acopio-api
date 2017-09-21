'use strict';

const AcopioSchema = require('../../schemas/centro_de_acopio');

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
          security: [{ jwt: [] }],
          responses: {
            201: {
              description: 'Success',
              schema: AcopioSchema.CentroDeAcopio
            }
          }
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
