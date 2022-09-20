const router = require('express').Router()
const logController = require('../controllers/logController')
router.get('/',(req,res)=>{
    logController.writeLog(req,res)
})
router.put('/id', (req,res)=>{
    res.json({message: 'Mostrar el articulo actualizado'})
})
router.delete('/id',(req,res)=>{
    res.json({message: 'Mostrar el articulo a borrar'})
})

module.exports = router