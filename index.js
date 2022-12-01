'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const { sequelizeDatabase, clothesModel, foodModel } = require('./src/models');
const { start } = require('./src/server');

sequelizeDatabase.sync()
  .then(() => {
    console.log('Successful Connection!');
    start();
  })
  .catch(err => console.error(err));