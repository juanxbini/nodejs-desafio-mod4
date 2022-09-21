const router = require('express').Router()
const articuloController = require('../controllers/articuloController')
router.post('/',(req,res)=>{
    articuloController.create(req,res)
})
router.put('/', (req,res)=>{
    articuloController.put(req,res)
})
router.delete('/id:',(req,res)=>{
    articuloController.delete(req,res)
})

module.exports = router