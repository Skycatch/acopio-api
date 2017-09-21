'use strict';

const AcopioUtils = require('../../utils');
const Path = require('path');

exports.register = function (server, options, next) {

  AcopioUtils.addRoutes([
    Path.join(__dirname, './post'),
    Path.join(__dirname, './get'),
    Path.join(__dirname, './put')
  ], server, options, next);
  next();
};

exports.register.attributes  = {
  name: 'acopios'
};
