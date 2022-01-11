const dbConfig = require('../config/dbConfig');

const { Sequelize, DataTypes } = require('sequelize');




const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASS, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false
}


)