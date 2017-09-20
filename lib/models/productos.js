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
    ultimaFechaActualizacion: DataTypes.DATE // twitter handle of the collection center manager
  }, {
    classMethods: {
      associate: (model) => {

        return this.belongsTo(model.CentroDeAcopio, {
          foreignKey: internals.kCollectionCenterForeignKey,
          targetKey: internals.kCollectionCenterTargetKey
        });
      }
    }
  });
};
