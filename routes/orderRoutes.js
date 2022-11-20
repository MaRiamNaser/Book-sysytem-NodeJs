
const router = require('express').Router()

const getAllOrders = require("../controllers/order/getAll")
const postOrder = require("../controllers/order/post")
const deleteOrder=require("../controllers/order/delete")
const updateOrder=require("../controllers/order/update")
const getOneOrder=require("../controllers/order/getOne")

router.route('/order')
.get(getAllOrders)
.post(postOrder)


 router.route("/order/:id")
.delete(deleteOrder)
.put(updateOrder)
.get(getOneOrder)

module.exports = router