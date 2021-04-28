const express = require('express')
const router = express.Router()
const {ensureAuth, ensureGuest} = require('../middleware/auth')

const Story = require('../models/Story')
const book = require('../models/Books')
const { query } = require('express')

// @desc    Login/Landing page
// @route   GET /

router.get('/', ensureGuest, (req, res) => {
    res.render('login', {
        layout: 'login',
    })
})


// @desc    Dashboard
// @route   GET /dashboard

router.get('/dashboard', ensureAuth , async (req, res) => {

    try{
        var page = Math.max(1, parseInt(req.query.page))
        var limit = Math.max(1, parseInt(req,query.limit))
        page = !isNaN(page)?page:1;
        limit = !isNaN(limit)?limit:10;

        var skip = (page - 1)*limit
        var count = await Story.countDocuments({})
        var maxPage = Math.ceil(count/limit)


        console.log(page)
        console.log(limit)
        const stories = await Story.find({user : req.user.id}).skip(skip).limit(limit).lean()
        res.render('dashboard', {
            name : req.user.firstName,
            currentPage:page,
            maxPage:maxPage,
            limit:limit,
            stories
        })
    }catch (err) {
        console.error(err)
        res.render('error/500')
    }

 
}) 


// @desc    about
// @route   GET /about

router.get('/about', (req, res) =>{
    try {

        res.render('about')
    }catch(err){
        console.error(err)
        res.render('error/500')
    }
})


// @desc    book
// @route   GET /book

router.get('/book', ensureAuth   , async (req, res) =>{
    console.log("book all")
    try{
        const Books = await book.find().populate('book').sort({createdAt: 'desc'}).lean()
        res.render('book', {
            Books
        })
    }catch(err){
        console.error(err)
        res.render('error/500')
    }
})



module.exports = router