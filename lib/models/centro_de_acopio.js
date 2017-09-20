'use strict';

const internals = {
  kCollectionCenterManagerForeignKey: 'idResponsableCentroDeAcopio',
  kCollectionCenterManagerTargetKey: 'idResponsablesDeCentros',
  kTableName: 'CentroDeAcopio' // collection center
};

module.exports = (sequelize, DataTypes) => {

  return sequelize.define(internals.kTableName, {
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
      associate: (model) => {

        return this.belongsTo(model.ResponsableDeCentro, {
          foreignKey: internals.kCollectionCenterManagerForeignKey,
          targetKey: internals.kCollectionCenterManagerTargetKey
        });
      }
    },
    timestamps: false
  });
};
