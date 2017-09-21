'use strict';

exports.register = function (server, options, next) {

  server.route({
    method: 'GET',
    path: '/v1/acopios/{acopiosId}/productos',
    config: {
      auth: false
    },
    handler: async function (request, reply) {

      const database = request.getDb('acopiodb');
      const CollectionCenter = database.getModel('CentroDeAcopio');
      const Products = database.getModel('Producto');

      try {
        const centroDeAcopio = await CollectionCenter.findOne({
          where: {
            id: request.params.acopiosId
          },
          include: [
            {
              as: 'productos',
              model: Products,
              required: true
            }
          ]
        });

        if (centroDeAcopio === null) {
          reply({
            error: 404,
            message: 'Not found'
          }).code(404);
          return;
        }

        reply(centroDeAcopio.get('productos'));
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

