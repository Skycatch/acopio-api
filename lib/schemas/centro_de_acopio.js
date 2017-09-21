'use strict';

const Joi = require('joi');
const SchemaResponsable = require('./responsable_de_centro');

exports.CentroDeAcopio = Joi.object({
  id: Joi.number().label('Id del centro de acopio'),
  nombre: Joi.string().label('Nombre del centro de acopio'),
  direccion: Joi.string().label('Direccion del centro de acopio'),
  status: Joi.string().label('Estado del centro de acopio'),
  latitud: Joi.number().label('Latitude del centro de acopio'),
  longitud: Joi.number().label('Longitud del centro de acopio'),
  responsables: SchemaResponsable.ResponsablesDeCentroDeAcopio
}).label('Centro de Acopio v1');

exports.CentrosDeAcopio = Joi.array()
  .items(exports.CentroDeAcopio).label('Centros de Acopio v1');
