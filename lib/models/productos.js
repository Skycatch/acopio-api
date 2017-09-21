'use strict';

const internals = {
  kCollectionCenterForeignKey: 'idCentroDeAcopio',
  kCollectionCenterTargetKey: 'idCentroDeAcopio',
  kTableName: 'Productos' // products
};

module.exports = (sequelize, DataTypes) => {

  const Productos = sequelize.define(internals.kTableName, {
    idProductos: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    }, // id of the product
    nombreProducto: DataTypes.STRING, // name of the product
    estadoProducto: DataTypes.STRING, // state of the product
    ultimaFechaActualizacion: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    } // updatedAt
  }, {
    timestamps: false,
    tableName: internals.kTableName
  });

  Productos.associate = (model) => {

    return Productos.belongsTo(model.CentroDeAcopio, {
      foreignKey: internals.kCollectionCenterForeignKey,
      targetKey: internals.kCollectionCenterTargetKey
    });
  };

  return Productos;
};
