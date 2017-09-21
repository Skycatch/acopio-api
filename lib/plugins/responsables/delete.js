'use strict';

exports.register = function (server, options, next) {

  server.route({
    method: 'DELETE',
    path: '/v1/responsables/{id}',
    config: {
      auth: 'jwt',
      description: 'Borra a una de las personas responsables por un centro de acopio',
      notes: 'Borra a uno de los responsables',
      tags: ['api'],
      plugins: {
        'hapi-swagger': {
          security: [{ jwt: [] }],
          responses: {
            204: {
              description: 'Success'
            }
          }
        }
      }
    },
    handler: async function (request, reply) {

      console.log('Auth', request.auth);
      if (request.auth.credentials.scope.indexOf('delete:responsables') === -1) {
        return reply().code(401);
      }
      const database = request.getDb('acopiodb');
      const Responsable = database.getModel('Responsable');
      try {
        const responsable = await Responsable.findById(request.params.id);
        await responsable.destroy();
        return reply().code(204);
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

