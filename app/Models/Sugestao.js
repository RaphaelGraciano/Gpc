'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Sugestao extends Model {
    home(){
        return this.belongsTo('App/Models/Home')
    }
    
}

module.exports = Sugestao
