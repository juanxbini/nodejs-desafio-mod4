const fs = require('fs')
const path = require('node:path');

module.exports = {
    writeLog: function(req,res){
        const PATH = path.join(__dirname, '../app.log')
        const objFile = {
            url: req.url,
            method: req.method
        }
        
        fs.writeFile(PATH,JSON.stringify(objFile),err =>{
            if(err){
                res.status(500).json({message: err})
                return
            }else{
                res.status(200).json({
                    message: 'log creado con exito',
                    log: objFile
            })
            }
        })
    }
}