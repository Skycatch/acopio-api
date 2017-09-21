'use strict';

const AcopioSchema = require('../../schemas/centro_de_acopio');

exports.register = function (server, options, next) {

  server.route({
    method: 'GET',
    path: '/v1/acopios',
    config: {
      auth: false,
      description: 'Devuelve una lista de los centros de acopio',
      notes: 'Lista de centros de acopio disponibles',
      tags: ['api'],
      plugins: {
        'hapi-swagger': {
          responses: {
            200: {
              description: 'Success',
              schema: AcopioSchema.CentrosDeAcopio
            }
          }
        }
      }
    },
    handler: async function (request, reply) {

      const database = request.getDb('acopiodb');
      const CollectionCenter = database.getModel('CentroDeAcopio');
      const Responsable = database.getModel('Responsable');

      try {
        const collectionCenterCollection = await CollectionCenter.findAll({
          include: [
            {
              model: Responsable,
              required: true
            }
          ]
        });

        reply(collectionCenterCollection);
      }
      catch (err) {
        console.error(err);
        reply({}).code(500);
      }

    }
  });
  next();
};

exports.register.attributes  = {
  name: 'acopios-get'
};
