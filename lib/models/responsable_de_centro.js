'use strict';

const internals = {
  kCollectionCenterManagerForeignKey: 'idResponsableCentroDeAcopio',
  kCollectionCenterManagerSourceKey: 'idResponsablesDeCentros',
  kTableName: 'ResponsableDeCentro'
};

module.exports = (sequelize, DataTypes) => {

  return sequelize.define(internals.kTableName, {
    idResponsablesDeCentros: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    }, // id of the collection center manager
    nombreResponsable: DataTypes.STRING, // name of the collection center manager
    telefonoResponsable: DataTypes.STRING, // phone number of collection center manager
    twitterResponsable: DataTypes.STRING, // twitter handle of the collection center manager
    emailResponsable: DataTypes.STRING // email of the collection center manager
  }, {
    classMethods: {
      associate: (model) => {

        return this.hasMany(model.CentroDeAcopio, {
          foreignKey: internals.kCollectionCenterManagerForeignKey,
          sourceKey: internals.kCollectionCenterManagerSourceKey
        });
      }
    }
  });
};

