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
      const Products = database.getModel('Productos');

      try {
        const centroDeAcopio = await CollectionCenter.findOne({
          where: {
            idCentroDeAcopio: request.params.acopiosId
          },
          include: [
            {
              model: Products,
              required: true
            }
          ]
        });

        if (centroDeAcopio === null) {
          reply({
            error: 404,
            message: "Not found"
          }).code(404);
          return;
        }

        reply(centroDeAcopio.get('Productos'));
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

