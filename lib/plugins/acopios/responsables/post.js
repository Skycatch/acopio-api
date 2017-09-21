'use strict';

const Joi = require('joi');

exports.register = function (server, options, next) {

  server.route({
    method: 'POST',
    path: '/v1/acopios/{id}/responsables',
    config: {
      auth: 'jwt',
      description: 'Agrega un responsable al centro de acopio',
      notes: 'Agrega un responsable nuevo al centro de acopio',
      tags: ['api'],
      plugins: {
        'hapi-swagger': {
          security: [{ jwt: [] }],
          responses: {
            201: {
              description: 'Success'
            }
          }
        }
      },
      validate: {
        payload: {
          idResponsable: Joi.number().required().label('ID del responsable')
        }
      }
    },
    handler: async function (request, reply) {

      const database = request.getDb('acopiodb');
      const CollectionCenter = database.getModel('CentroDeAcopio');
      const Responsable = database.getModel('Responsable');
      try {
        const responsable = await Responsable.findById(request.payload.idResponsable);
        const acopio = await CollectionCenter.findById(request.params.id);
        acopio.addResponsable(responsable)
        .then(() => {

          reply().code(201);
        });
      }
      catch (err) {

        console.error(err);
        reply().code(500);
      }
    }
  });
  next();
};

exports.register.attributes  = {
  name: 'acopios-post'
};

