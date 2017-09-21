'use strict';

const Joi = require('joi');

exports.CentroDeAcopio = Joi.object({
  idCentroDeAcopio: Joi.number().label('Id del centro de acopio'),
  nombreCentroDeAcopio: Joi.string().label('Nombre del centro de acopio'),
  direccionCentroDeAcopio: Joi.string().label('Direccion del centro de acopio'),
  estadoDeAcopio: Joi.string().label('Estado del centro de acopio'),
  idResponsableCentroDeAcopio: Joi.number().label('ID de la persona responsable'),
  ResponsableDeCentro: Joi.object({
    idResponsableCentroDeAcopio: Joi.number().label('ID de la persona responsable'),
    nombreResponsable: Joi.string().label('Nombre del responsable'),
    telefonoResponsable: Joi.string().label('Telefono de la persona responsable'),
    twitterResponsable: Joi.string().label('Twitter handle de la persona responsable'),
    emailResponsable: Joi.string().label('Correo electronico de la persona responsable'),
  })
}).label('Centro de Acopio v1');

exports.CentrosDeAcopio = Joi.array()
  .items(exports.CentroDeAcopio).label('Centro de Acopio v1');
