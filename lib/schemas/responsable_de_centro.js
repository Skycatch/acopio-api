'use strict';

const Joi = require('joi');

exports.ResponsableDeCentro = Joi.object({
  idResponsableCentroDeAcopio: Joi.number().label('ID de la persona responsable'),
  nombreResponsable: Joi.string().label('Nombre del responsable'),
  telefonoResponsable: Joi.string().label('Telefono de la persona responsable'),
  twitterResponsable: Joi.string().label('Twitter handle de la persona responsable'),
  emailResponsable: Joi.string().label('Correo electronico de la persona responsable')
}).label('Responsable de Centro de Acopio v1');

exports.ResponsablesDeCentrosDeAcopio = Joi.array()
  .items(exports.ResponsableDeCentro).label('Responsables de Centros de Acopio v1');
