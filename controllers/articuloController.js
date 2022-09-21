const articulosModel = require('../models/articulosModel')
const logController = require('./logController')
module.exports = {
    put: function(req,res){
        let objQuery = {}
        if(req.query['id']) objQuery.id = req.query['id']
        if(req.query['nombre']) objQuery.nombre = req.query['nombre']
        if(req.query['price']) objQuery.price = req.query['price']
        console.log(objQuery)
        articulosModel.update(req.query.id,objQuery,(err,articulo)=>{
            if(err){
                res.status(500).json({
                    message: 'Error al actualizar el articulo',
                    err: err
                })
                return
            }else{
                res.status(200).json({
                    message: `${JSON.stringify(articulo)} actualizado correctamente.`
                })
                logController.writeLog(req,res)
            }
        })
    },
    create: function(req,res){
        objQuery = {}
        if(req.query['id']) objQuery.id = req.query['id']
        if(req.query['nombre']) objQuery.nombre = req.query['nombre']
        if(req.query['price']) objQuery.price = req.query['price']
        console.log(objQuery)
        articulosModel.save(objQuery, (err, articulo)=>{
            if(err){
                res.status(500).json({
                    message: 'Error al crear un nuevo articulo',
                    err: err
                })
                return
            }else{
                res.status(200).json({
                    message: `${articulo.nombre} creado correctamente`
                })
                logController.writeLog(req,res)
            }
        })
    },
    delete: function(req,res){
        articulosModel.remove(req.params.id, (err,articulo)=>{
            if(err){
                res.status(500).json({
                    message: 'Erro al eliminar articulo',
                    err: err
                })
                return
            }else{
                res.status(200).json({
                    message: `${articulo.nombre} eliminado con exito`
                })
                logController.writeLog(req,res)
            }
        })
    }
}