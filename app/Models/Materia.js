'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Materia extends Model {
    home(){
        return this.belongsToMany('App/Models/Home')
    }
    
}

module.exports = Materia
