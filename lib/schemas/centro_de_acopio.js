'use strict';

const Joi = require('joi');
const SchemaResponsables = require('./responsables');

exports.CentroDeAcopio = Joi.object({
  id: Joi.number().label('Id del centro de acopio'),
  nombre: Joi.string().label('Nombre del centro de acopio'),
  direccion: Joi.string().label('Direccion del centro de acopio'),
  status: Joi.string().label('Estado del centro de acopio'),
  latitud: Joi.number().min(0).max(90).label('Latitude del centro de acopio'),
  longitud: Joi.number().min(-180).max(180).label('Longitud del centro de acopio'),
  responsables: SchemaResponsables.Responsables
}).label('Centro de Acopio v1');

exports.CentrosDeAcopio = Joi.array()
  .items(exports.CentroDeAcopio).label('Centros de Acopio v1');
