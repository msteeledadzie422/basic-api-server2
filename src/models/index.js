'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const clothesSchema = require('./clothes');
const foodSchema = require('./food');

const DATABASE_URL = process.env.DATABASE_URL;

const sequelizeDatabase = new Sequelize(DATABASE_URL);

const clothesModel = clothesSchema(sequelizeDatabase, DataTypes);
const foodModel = foodSchema(sequelizeDatabase, DataTypes);

module.exports = {sequelizeDatabase, clothesModel, foodModel};