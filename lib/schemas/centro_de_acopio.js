'use strict';

const Joi = require('joi');

exports.CentroDeAcopio = Joi.object({
      idCentroDeAcopio: Joi.number().label('id'),
      nombreCentroDeAcopio: Joi.string().label('nombre'),
      direccionCentroDeAcopio: Joi.string().label('direccion'),
      estadoDeAcopio: Joi.string().label('estado')
  }).label('Centro de Acopio v1');

exports.CentrosDeAcopio = Joi.array()
  .items(exports.CentroDeAcopio).label('Centro de Acopio v1');
