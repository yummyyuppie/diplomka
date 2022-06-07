const Router  = require('express')
const router = new Router()
const infoController = require('../controllers/InfoController')

router.get('/chances', infoController.calculateChances)
router.get('/specialities', infoController.getAllSpecialities)
router.get('/edu_progs', infoController.getAllEduProgs)
router.get('/subjects', infoController.getSubjects)
router.get('/:id', infoController.getGeneralInfo)
router.get('/:id/uni', infoController.uniInfo)
router.get('/others/:id', infoController.getOtherSpecialities)
module.exports = router