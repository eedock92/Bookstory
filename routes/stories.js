const express = require('express')

const router = express.Router()
const { ensureAuth } = require('../middleware/auth')


const storyController = require('../controllers/storyController')

//@desc     Show/add page
//@route    GET / stories/add
router.get('/add', ensureAuth, storyController.getAdd)


//@desc     Show/add page
//@route    POST / stories/add
router.post('/', ensureAuth, storyController.postStory)


//@desc     Show/all stories
//@route    GET / stories
router.get('/', ensureAuth, storyController.getStories)


//@desc     Show single story
//@route    GET /stories/:id
router.get('/:id', ensureAuth, storyController.getShow)


//@desc     Show edit page
//@route    GET / stories/edit/:id
router.get('/edit/:id', ensureAuth, storyController.getEdit)


// @desc    Update story
// @route   PUT /stories/:id 
router.put('/:id', ensureAuth, storyController.UpdateStory )


// @desc    Delete story
// @route   Delete /stories/:id
router.delete('/:id', ensureAuth, storyController.deleteStory)


//@desc     User stories
//@route    GET /stories/user/:userId
router.get('/user/:userId', ensureAuth, storyController.getUserStory)


module.exports = router