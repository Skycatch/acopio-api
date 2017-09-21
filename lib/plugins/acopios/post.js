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
        payload: {
          nombreCentroDeAcopio: Joi.string().required(),
          direccionCentroDeAcopio: Joi.string().required(),
          estadoDeAcopio: Joi.string().required(),
          nombreResponsable: Joi.string().required(), // name of the collection center manager
          telefonoResponsable: phoneJoi.string().phoneNumber().required(), // phone number of collection center manager
          twitterResponsable: Joi.string().default(''), // twitter handle of the collection center manager
          emailResponsable: Joi.string().email().required() // email of the collection center manager
        }
      }
    },
    handler: function (request, reply) {

      const database = request.getDb('acopiodb');
      const CollectionCenter = database.getModel('CentroDeAcopio');
      const ResponsableDeCentro = database.getModel('ResponsableDeCentro');
      let _responsable;
      console.log(request.payload);
      ResponsableDeCentro.create({
        nombreResponsable: request.payload.nombreResponsable, // name of the collection center manager
        telefonoResponsable: request.payload.telefonoResponsable, // phone number of collection center manager
        twitterResponsable: request.payload.twitterResponsable, // twitter handle of the collection center manager
        emailResponsable: request.payload.emailResponsable // email of the collection center manager
      })
      .then((responsable) => {

        _responsable = responsable;
        return CollectionCenter.create({
          nombreCentroDeAcopio: request.payload.nombreCentroDeAcopio,
          direccionCentroDeAcopio: request.payload.direccionCentroDeAcopio,
          estadoDeAcopio: request.payload.estadoDeAcopio,
          idResponsableCentroDeAcopio: responsable.idResponsablesDeCentros
        });
      })
      .then((centro) => {

        const response = centro.toJSON();
        response.ResponsableDeCentro = _responsable.toJSON();
        reply(response).code(201);
      })
      .catch((err) => {

        console.error(err);
        reply({}).code(500);
      });
    }
  });
  next();
};

exports.register.attributes  = {
  name: 'acopios-post'
};
