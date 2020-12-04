'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Home extends Model {
    materia(){
        return this.belongsTo('App/Models/Materia')
    }
    user(){
        return this.belongsTo('App/Models/User')
    }
    sugestao(){
        return this.belongsToMany('App/Models/Sugestao')
    }
}

module.exports = Home
