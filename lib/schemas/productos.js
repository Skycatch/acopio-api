'use strict';

const Joi = require('joi');

exports.Producto = Joi.object({
  id: Joi.number().label('ID del producto'),
  nombre: Joi.string().label('Nombre del producto'),
  detalle: Joi.string().label('Detalles del producto')
}).label('Producto v1');

exports.Productos = Joi.array()
  .items(exports.Producto).label('Productos v1');
