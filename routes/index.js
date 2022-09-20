const router = require('express').Router()
const articulosRoute = require('./articulosRoute')

router.use('/articulos', articulosRoute)
router.get('/', (req,res)=>{
    res.json({message: 'enrutado correctamente'})
})

module.exports = router