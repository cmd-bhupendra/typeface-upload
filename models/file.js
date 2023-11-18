const {Sequelize, Model, DataTypes} = require('sequelize');
const sequelize = require('./sequelize');

class fileTable extends Model {}

fileTable.init({
    fileName: DataTypes.TEXT,
    fileType: DataTypes.TEXT,
    size: DataTypes.BIGINT,
    config: DataTypes.TEXT
})

module.exports = fileTable

// const Book = sequelize.define("books", {
//    title: {
//      type: DataTypes.STRING,
//      allowNull: false
//    },
//    author: {
//      type: DataTypes.STRING,
//      allowNull: false
//    },
//    release_date: {
//      type: DataTypes.DATEONLY,
//    },
//    subject: {
//      type: DataTypes.INTEGER,
//    }
// });