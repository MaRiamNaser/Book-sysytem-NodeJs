const db = require("../DB/database")
const {DataTypes}=require("sequelize")
module.exports = () => {
    return db.define('Role', {
      id: {
        type:  DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },

      roleName: {
        type: DataTypes.STRING,
        allowNull: false,

      },
      

    })
  }