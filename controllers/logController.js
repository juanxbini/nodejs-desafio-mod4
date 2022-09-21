const fs = require('fs')
const path = require('node:path');

module.exports = {
    writeLog: function (req, res) {
        const PATH = path.join(__dirname, '../app.log')
        const objFile = {
            url: req.url,
            method: req.method
        }
        setTimeout(() => {
            fs.writeFile(PATH, JSON.stringify(objFile), err => {
                if (err) {
                    console.log('No se pudo guardar el log')
                    return
                } else {
                    console.log(`log ${JSON.stringify(objFile)} guardado correctamente`)
                }
            })
        }, 0)
    }
}