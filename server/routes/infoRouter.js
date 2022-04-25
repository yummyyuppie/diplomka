const Router  = require('express')
const router = new Router()
const infoController = require('../controllers/InfoController')

router.get('/chances', infoController.calculateChances)
router.get('/specialities', infoController.getAllSpecialities)
router.get('/:id', infoController.getGeneralInfo)
router.get('/:id/uni', infoController.uniInfo)
module.exports = router