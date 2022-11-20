const db = require("../DB/database")
const {DataTypes}=require("sequelize")
module.exports = () => {
   return  db.define('Order', {
      id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue : DataTypes.NOW
      },
    })
  }