'use strict';

const AcopioUtils = require('../../../utils');
const Path = require('path');

exports.register = function (server, options, next) {

  AcopioUtils.addRoutes([
    Path.join(__dirname, './post')
  ], server, options, next);
  next();
};

exports.register.attributes  = {
  name: 'acopios_responsables'
};

