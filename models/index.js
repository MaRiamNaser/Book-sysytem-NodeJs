// import sequelize & schemas
const {  DataTypes } = require('sequelize');
const db = require("../DB/database")
 // create models
const role = require("./role.model")();
const user = require("./user.model")();
const author = require("./author.model")();
const book = require("./book.model")();
const category = require("./category.model")();
const order = require("./order.model")();
const authorBook = db.define("author_book");
const orderBook = db.define("order_book");
/**  define relationships */

// user & role (one -> many)
role.hasMany(user);
user.belongsTo(role);

// book & category (one -> many)
category.hasMany(book);
book.belongsTo(category);

// author & book (many -> many)
author.belongsToMany(book, { through: authorBook })
book.belongsToMany(author, { through: authorBook })


// order & book (many -> many)
order.belongsToMany(book, { through: orderBook })
book.belongsToMany(order, { through: orderBook })

// user & order (one->many)
user.hasMany(order)
order.belongsTo(user)

 // generate tables in DB
db.sync({force:false}).then(_=>console.log("Tabels created")).catch((e)=>console.log(e))


