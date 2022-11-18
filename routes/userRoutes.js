
const router = require('express').Router()

const getUserAll=require("../controllers/user/getAll")
const postUser=require("../controllers/user/post")
const deleteUser=require("../controllers/user/delete")
const updateUser=require("../controllers/user/update")
const getOneUser=require("../controllers/user/getOne")
router
.route('/user')
.get(getUserAll)
.post( postUser)

router.route("/user/:id")
.put(updateUser)
.delete(deleteUser)
.get(getOneUser)
module.exports=router