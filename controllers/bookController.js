const express = require('express')

const router = express.Router()
const book = require('../models/Books')



//@desc     show/all books
//@route    GET / books
exports.getBooks = async (req, res) => {
    console.log("book all")
    try{
        const books = await book.find().populate('book').sort({createdAt: 'desc'}).lean()
       console.log(books)
        res.render('books/index', {
            books,
        })
    }catch(err){
        console.error(err)
        res.render('error/500')
    }
    
}


//@desc     show single book
//@route    GET / books/:id
exports.getBook = (req, res) => {
    res.render('/book')
}