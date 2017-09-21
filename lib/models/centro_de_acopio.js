'use strict';

const internals = {
  kCollectionCenterManagerForeignKey: 'centro_de_acopio_id',
  kCollectionCenterManagerOtherKey: 'responsable_id',
  kCollectionCenterManagerThroughTable: 'CentroDeAcopioResponsables',
  kProductsForeignKey: 'centro_de_acopio_id',
  kProductsOtherKey: 'producto_id',
  kProductsThroughTable: 'CentrosDeAcopioProductos',
  kModelName: 'CentroDeAcopio' ,
  kTableName: 'CentrosDeAcopio' // collection center
};

module.exports = (sequelize, DataTypes) => {

  const CentroDeAcopio = sequelize.define(internals.kModelName, {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    }, // id of the collection center
    nombre: DataTypes.STRING, // name of the collection center
    direccion: DataTypes.STRING, // address of the collection center
    latitud: DataTypes.DOUBLE, // latitude
    longitud: DataTypes.DOUBLE, // longitude
    status: DataTypes.STRING // state of the collection center
  }, {
    timestamps: false,
    tableName: internals.kTableName
  });

  CentroDeAcopio.associate = (model) => {

    CentroDeAcopio.belongsToMany(model.Responsable, {
      as: 'responsables',
      through: internals.kCollectionCenterManagerThroughTable,
      foreignKey: internals.kCollectionCenterManagerForeignKey,
      otherKey: internals.kCollectionCenterManagerOtherKey,
      timestamps: false
    });

    CentroDeAcopio.belongsToMany(model.Producto, {
      as: 'productos',
      through: internals.kProductsThroughTable,
      foreignKey: internals.kProductsForeignKey,
      otherKey: internals.kProductsOtherKey,
      timestamps: false
    });
  };

  return CentroDeAcopio;
};
