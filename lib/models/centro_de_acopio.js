'use strict';

const internals = {
  kCollectionCenterManagerForeignKey: 'idResponsableCentroDeAcopio',
  kCollectionCenterManagerTargetKey: 'idResponsablesDeCentros',
  kProductosForeignKey: 'idCentroDeAcopio',
  kProductosSourceKey: 'idCentroDeAcopio',
  kTableName: 'CentroDeAcopio' // collection center
};

module.exports = (sequelize, DataTypes) => {

  const CentroDeAcopio = sequelize.define(internals.kTableName, {
    idCentroDeAcopio: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    }, // id of the collection center
    nombreCentroDeAcopio: DataTypes.STRING, // name of the collection center
    direccionCentroDeAcopio: DataTypes.STRING, // address of the collection center
    estadoDeAcopio: DataTypes.STRING // state of the collection center
  }, {
    classMethods: {
    },
    timestamps: false,
    tableName: internals.kTableName
  });

  CentroDeAcopio.associate = (model) => {

    CentroDeAcopio.belongsTo(model.ResponsableDeCentro, {
      foreignKey: internals.kCollectionCenterManagerForeignKey,
      targetKey: internals.kCollectionCenterManagerTargetKey
    });

    CentroDeAcopio.hasMany(model.Productos, {
      foreignKey: internals.kProductosForeignKey,
      sourceKey: internals.kProductosSourceKey
    });

    return;
  };

  return CentroDeAcopio;
};
