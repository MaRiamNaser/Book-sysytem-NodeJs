
const router = require('express').Router()

//const getOnebook = require("../controllers/book/getOne")
const postBook = require("../controllers/book/post")

router.route('/book')
.post(postBook)


//  router.route("/book/:id")
//  .delete(deletebook)

module.exports = router