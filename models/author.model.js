const db = require("../DB/database")
const {DataTypes}=require("sequelize")
module.exports = () => {
   const author =  db.define('Author', {
      id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      authorName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    })
    return author;
  }