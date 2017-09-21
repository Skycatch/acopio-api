'use strict';

exports.register = function (server, options, next) {

  require('./get').register(server, options, next);
};

exports.register.attributes  = {
  name: 'acopios_productos'
};
