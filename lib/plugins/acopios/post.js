'use strict';

const AcopioSchema = require('../../schemas/centro_de_acopio');
const Joi = require('joi');
const phoneJoi = Joi.extend(require('joi-phone-number'));

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
      },
      validate: {
        payload: Joi.object({
          nombre: Joi.string().required(),
          direccion: Joi.string().required(),
          latitud: Joi.number().min(0).max(90).required(),
          longitud: Joi.number().min(-180).max(180).required(),
          status: Joi.string().required(),
        }).label('Acopio Request')
        payload: {
        }
      }
    },
    handler: function (request, reply) {

      const database = request.getDb('acopiodb');
      const CollectionCenter = database.getModel('CentroDeAcopio');
      CollectionCenter.create({
        nombre: request.payload.nombre,
        direccion: request.payload.direccion,
        latitud: request.payload.latitud,
        longitud: request.payload.longitud,
        status: request.payload.status,
      })
      .then((centroDeAcopio) => {

        reply(centroDeAcopio).code(201);
      })
      .catch((err) => {

        console.error(err);
        reply().code(500);
      });
    }
  });
  next();
};

exports.register.attributes  = {
  name: 'acopios-post'
};
