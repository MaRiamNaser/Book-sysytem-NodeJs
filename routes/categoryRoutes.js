
const router = require('express').Router()

const postCategory = require("../controllers/category/post")

router.route('/category')
.post(postCategory)


//  router.route("/category/:id")
//  .delete(deleteCategory)

module.exports = router