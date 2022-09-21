const articulos = [
    {
        id: 1,
        nombre: 'camisa',
        price: 300
    },
    {
        id: 2,
        nombre: 'pantalon',
        price: 400
    }
]
module.exports = {
    save: function(articulo,cb){
        if(!articulo){
            cb(true,articulo)
        }else{
            articulos.push(articulo)
            cb(false,articulo)
        }
    },
    update: function(id,cb){
        let index = articulos.findIndex(articulo => articulo.id == id)
        let articulo = articulos[index]
        if(index == -1){
            cb(true,articulo)
        }else{
            articulos.splice(index, 1, articulo)
            cb(false,articulo)
        }
    },
    remove: function(id,cb){
        let index = articulos.findIndex(articulo => articulo.id == id)
        let articulo = articulos[index]
        if(index == -1){
            cb(true,articulo)
        }else{
            articulos.splice(index,1)
            cb(false,articulo)
        }
    }
}