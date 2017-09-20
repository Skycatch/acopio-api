'use strict';

const internals = {
  kCollectionCenterForeignKey: 'idCentroDeAcopio',
  kCollectionCenterTargetKey: 'idCentroDeAcopio',
  kTableName: 'Productos' // products
};

module.exports = (sequelize, DataTypes) => {

  return sequelize.define(internals.kTableName, {
    idProductos: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    }, // id of the product
    nombreProducto: DataTypes.STRING, // name of the product
    estadoProducto: DataTypes.STRING, // state of the product
    ultimaFechaActualizacion: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.literal('CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP()')
    } // updatedAt
  }, {
    classMethods: {
      associate: (model) => {

        return this.belongsTo(model.CentroDeAcopio, {
          foreignKey: internals.kCollectionCenterForeignKey,
          targetKey: internals.kCollectionCenterTargetKey
        });
      }
    },
    timestamps: false
  });
};
