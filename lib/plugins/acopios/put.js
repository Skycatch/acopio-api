'use strict';

const AcopioSchema = require('../../schemas/centro_de_acopio');
const Joi = require('joi');

exports.register = function (server, options, next) {

  server.route({
    method: 'PUT',
    path: '/v1/acopios/{id}',
    config: {
      auth: 'jwt',
      description: 'Edita el centro de acopio',
      notes: 'Edita el centro de acopio',
      tags: ['api'],
      plugins: {
        'hapi-swagger': {
          security: [{ jwt: [] }],
          responses: {
            200: {
              description: 'Success',
              schema: AcopioSchema.CentroDeAcopio
            }
          }
        }
      },
      validate: {
        payload: {
          nombre: Joi.string().required(),
          direccion: Joi.string().required(),
          latitud: Joi.number().min(0).max(90).required(),
          longitud: Joi.number().min(-180).max(180).required(),
          status: Joi.string().required()
        }
      }
    },
    handler: async function (request, reply) {

      console.log('Auth', request.auth);
      if (request.auth.credentials.scope.indexOf('update:acopios') === -1) {
        return reply().code(401);
      }
      const database = request.getDb('acopiodb');
      const CollectionCenter = database.getModel('CentroDeAcopio');
      try {
        const centroDeAcopio = await CollectionCenter.findById(request.params.id);
        centroDeAcopio.nombre = request.payload.nombre;
        centroDeAcopio.direccion = request.payload.direccion;
        centroDeAcopio.latitud = request.payload.latitud;
        centroDeAcopio.longitud = request.payload.longitud;
        centroDeAcopio.status = request.payload.status;
        await centroDeAcopio.save();
        return reply(centroDeAcopio);
      }
      catch (err) {
        console.error(err);
        reply().code(500);
      };
    }
  });
  next();
};

exports.register.attributes  = {
  name: 'acopios-post'
};
