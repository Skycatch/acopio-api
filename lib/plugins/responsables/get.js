'use strict';

const ResponsablesSchema = require('../../schemas/responsables');

exports.register = function (server, options, next) {

  server.route({
    method: 'GET',
    path: '/v1/responsables',
    config: {
      auth: false,
      description: 'Devuelve una lista de los responsables',
      notes: 'Lista de responsables',
      tags: ['api'],
      plugins: {
        'hapi-swagger': {
          responses: {
            200: {
              description: 'Success',
              schema: ResponsablesSchema.Responsables
            }
          }
        }
      }
    },
    handler: async function (request, reply) {

      const database = request.getDb('acopiodb');
      const ResponsablesCenter = database.getModel('Responsable');
      try {
        const collectionResponsables = await ResponsablesCenter.findAll({});
        reply(collectionResponsables);
      }
      catch ( err ) {
        console.log(err);
        reply({}).code(500);
      }
    }
  });
  next();
};

exports.register.attributes = {
  name: 'responsables-get'
};
