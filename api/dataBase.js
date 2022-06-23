require('dotenv').config();
const Sequelize = require("sequelize");
const {
    DB_USER, DB_PASSWORD, DB_HOST,
} = process.env
const sequelize= new Sequelize(`mysql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/personalbudget`)

const financialMovementModel= require('./src/models/financialMovement');
const CategoryModel = require('./src/models/Category');

const FinancialMovement = financialMovementModel(sequelize, Sequelize);
const Category= CategoryModel(sequelize, Sequelize);

FinancialMovement.belongsTo(Category);


module.exports = {
    FinancialMovement,
    Category,
    conn: sequelize
}
