'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MateriasSchema extends Schema {
  up () {
    this.create('materias', (table) => {
      table.increments()
      table.string('materias', 45).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('materias')
  }
}

module.exports = MateriasSchema
