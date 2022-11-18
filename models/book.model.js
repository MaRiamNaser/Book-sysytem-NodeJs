const db = require("../DB/database")
const {DataTypes}=require("sequelize")
module.exports = () => {
   return  db.define('Book', {
      id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      path: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ispn: {
        type: DataTypes.STRING,
        allowNull: false,
      }, 
    })
  }