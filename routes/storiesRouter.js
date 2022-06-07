const Router  = require('express')
const router = new Router()
const storiesController = require('../controllers/StoriesController')

router.post('/create', storiesController.create)
router.delete('/:id', storiesController.delete)
router.put('/:id/approve', storiesController.approve)
router.get('/', storiesController.getAllPosts)
router.get('/:id', storiesController.getPostById)

module.exports = router