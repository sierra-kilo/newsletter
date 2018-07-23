const uuid = require('uuid'); // ES5
var Sequelize = require('sequelize');
'use strict';

module.exports = function(sequelize, DataTypes) {
  var Email = sequelize.define("Email", {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1
    },
    email: {
      type: Sequelize.STRING,
      // added unique attribute
      unique: true
    }
  })
  return Email;
};
