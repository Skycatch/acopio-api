'use strict';

const ResponsablesSchema = require('../../schemas/responsables');
const Joi = require('joi');

exports.register = function (server, options, next) {

  server.route({
    method: 'POST',
    path: '/v1/responsables',
    config: {
      auth: 'jwt',
      description: 'Crea un nuevo responsable',
      notes: 'Agrega un responsable nuevo',
      tags: ['api'],
      plugins: {
        'hapi-swagger' :{
          security: [{ jwt: [] }],
          responses: {
            201: {
              description: 'Success',
              schema: ResponsablesSchema.Responsable
            }
          }
        }
      },
      validate: {
        payload: Joi.object({
          nombre: Joi.string().required(),
          telefono: Joi.string().required(),
          facebook: Joi.string(),
          twitter: Joi.string(),
          email: Joi.string().email()
        }).label('Responsables Request')
      }
    },
    handler: function (request, reply) {

      console.log('inserting POST');
      const database = request.getDb('acopiodb');
      const Responsable = database.getModel('Responsable');
      Responsable.create({
        nombre: request.payload.nombre,
        telefono: request.payload.telefono,
        facebook: request.payload.facebook,
        twitter: request.payload.twitter,
        email: request.payload.email
      }).then( (responsable) => {

        reply(responsable).code(201);
      }).catch( (err) => {

        console.log(err);
        reply().code(err);
      });
    }
  });
  next();
};

exports.register.attributes = {
  name: 'responsables-post'
};
