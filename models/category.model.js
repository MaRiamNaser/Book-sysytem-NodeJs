const db = require("../DB/database")
const {DataTypes} = require("sequelize")
module.exports = () => {
   return  db.define('Category', {
      id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      categoryName: {
        type: DataTypes.STRING,
        allowNull: false,
      }, 
    })
  }