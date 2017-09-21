'use strict';

const Joi = require('joi');
const SchemaResponsable = require('./responsable_de_centro');

exports.CentroDeAcopio = Joi.object({
  idCentroDeAcopio: Joi.number().label('Id del centro de acopio'),
  nombreCentroDeAcopio: Joi.string().label('Nombre del centro de acopio'),
  direccionCentroDeAcopio: Joi.string().label('Direccion del centro de acopio'),
  estadoDeAcopio: Joi.string().label('Estado del centro de acopio'),
  idResponsableCentroDeAcopio: Joi.number().label('ID de la persona responsable'),
  ResponsableDeCentro: SchemaResponsable.ResponsableDeCentro
}).label('Centro de Acopio v1');

exports.CentrosDeAcopio = Joi.array()
  .items(exports.CentroDeAcopio).label('Centro de Acopio v1');
