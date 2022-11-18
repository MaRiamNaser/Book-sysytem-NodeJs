
const router = require('express').Router()

const getRoleAll = require("../controllers/order/getAll")
const postRole = require("../controllers/role/post")
const deleteRole = require("../controllers/role/delete")
const updateRole = require("../controllers/role/update")
const getOneRole = require("../controllers/role/getOne")
router
.route('/role')
.get(getRoleAll)
.post(postRole)

router.route("/role/:id")
.put(updateRole)
.delete(deleteRole)
.get(getOneRole)
module.exports=router