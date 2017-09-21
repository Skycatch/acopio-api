'use strict';

const Joi = require('joi');

exports.Responsable = Joi.object({
  id: Joi.number().label('ID de la persona responsable'),
  nombre: Joi.string().label('Nombre del responsable'),
  telefono: Joi.string().label('Telefono de la persona responsable'),
  facebook: Joi.string().label('Facebook de la persona responsable'),
  twitter: Joi.string().label('Twitter handle de la persona responsable'),
  email: Joi.string().label('Correo electronico de la persona responsable')
}).label('Responsable de Centro de Acopio v1');

exports.Responsables = Joi.array()
  .items(exports.Responsable).label('Responsables de Centro de Acopio v1');
