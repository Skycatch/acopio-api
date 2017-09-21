'use strict';

const internals = {
  kCollectionCenterForeignKey: 'responsable_id',
  kCollectionCenterOtherKey: 'centro_de_acopio_id',
  kCollectionCenterThroughTable: 'CentroDeAcopioResponsables',
  kTableName: 'Responsables'
  kTableName: 'Responsable'
};

module.exports = (sequelize, DataTypes) => {

  const Responsable = sequelize.define(internals.kModelName, {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    }, // id of the collection center manager
    nombre: DataTypes.STRING, // name of the collection center manager
    telefono: DataTypes.STRING, // phone number of collection center manager
    email: DataTypes.STRING, // email of the collection center manager
    twitter: DataTypes.STRING, // twitter handle of the collection center manager
    facebook: DataTypes.STRING // twitter handle of the collection center manager
  }, {
    timestamps: false,
    tableName: internals.kTableName
  });

  Responsable.associate = (model) => {

    return Responsable.hasMany(model.CentroDeAcopio, {
      as: 'centros_de_acopio'
      through: internals.kCollectionCenterThroughTable,
      foreignKey: internals.kCollectionCenterForeignKey,
      otherKey: internals.kCollectionCenterOtherKey
    });
  };

  return Responsable;
};

