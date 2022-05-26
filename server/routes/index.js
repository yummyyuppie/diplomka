const Router  = require('express')
const router = new Router()
const infoRouter = require('./infoRouter')
const storiesRouter = require('./storiesRouter')


router.use('/info', infoRouter)
router.use('/stories', storiesRouter)

module.exports = router