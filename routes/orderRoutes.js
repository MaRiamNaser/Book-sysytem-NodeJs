
const router = require('express').Router()

const getAllOrders = require("../controllers/order/getAll")
const postOrder = require("../controllers/order/post")
// const deleteorder=require("../controllers/order/delete")
const deleteOrder = require("../controllers/order/delete")
// const updateRole=require("../controllers/order/update")
// const getOneRole=require("../controllers/order/getOne")
router.route('/order')
.get(getAllOrders)
.post(postOrder)


 router.route("/order/:id")
 .delete(deleteOrder)

module.exports = router