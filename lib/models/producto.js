'use strict';

const internals = {
  kCollectionCenterForeignKey: 'producto_id',
  kCollectionCenterOtherKey: 'centro_de_acopio_id',
  kCollectionCenterThroughTable: 'CentroDeAcopioProductos',
  kModelName: 'Producto', // products
  kTableName: 'Productos' // products
};

module.exports = (sequelize, DataTypes) => {

  const Producto = sequelize.define(internals.kModelName, {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    }, // id of the product
    nombre: DataTypes.STRING, // name of the product
    detalle: DataTypes.STRING // state of the product
  }, {
    timestamps: false,
    tableName: internals.kTableName
  });

  Producto.associate = (model) => {

    Producto.belongsToMany(model.CentroDeAcopio, {
      as: 'centros_de_acopio',
      through: internals.kCollectionCenterThroughTable,
      foreignKey: internals.kCollectionCenterForeignKey,
      otherKey: internals.kCollectionCenterOtherKey
    });
  };

  return Producto;
};
