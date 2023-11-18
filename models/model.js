const sequelize = require('./sequelize');
const fileTable = require('./file');

sequelize.sync()

module.exports = {fileTable}