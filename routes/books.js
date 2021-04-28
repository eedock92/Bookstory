const express = require('express')

const router = express.Router()
const {ensureAuth} = require('../middleware/auth')


const bookController = require('../controllers/bookController')



//@desc     show/all books
//@route    GET / books
router.get('/', ensureAuth, bookController.getBooks)


//@desc     show single book
//@route    GET / books/:id
router.get('/', ensureAuth, bookController.getBook)






module.exports = router
