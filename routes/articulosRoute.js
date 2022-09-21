const router = require('express').Router()
const logController = require('../controllers/logController')
router.post('/',(req,res)=>{
    logController.writeLog(req,res)
})
router.put('/id', (req,res)=>{
    logController.writeLog(req,res)
    res.json({message: 'Mostrar el articulo actualizado'})
})
router.delete('/id',(req,res)=>{
    logController.writeLog(req,res)
    res.json({message: 'Mostrar el articulo a borrar'})
})

module.exports = router