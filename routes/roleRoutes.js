
const router = require('express').Router()

const getAllRoles = require("../controllers/role/getAll")
const postRole = require("../controllers/role/post")
const deleteRole = require("../controllers/role/delete")
const updateRole = require("../controllers/role/update")
const getOneRole = require("../controllers/role/getOne")
const verifyToken = require("../middlewares/verifyToken")
const isSuperAdmin = require("../middlewares/isSuperAdmin")
const jwt = require('jsonwebtoken')
const fs = require('fs')
let cert = fs.readFileSync('secret.key')



router
.route('/role')
.get(verifyToken, getAllRoles)
.post(isSuperAdmin,postRole)

router.route("/role/:id")
.put(updateRole)
.delete(deleteRole)
.get(getOneRole)
module.exports=router




