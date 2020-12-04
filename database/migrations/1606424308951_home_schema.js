'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HomeSchema extends Schema {
  up () {
    this.create('homes', (table) => {
      table.increments()
      table.string('ano', 45).notNullable().unique()
      table
      .integer("id_materias")
      .unsigned()
      .references("id")
      .inTable("materias")
      .onUpdate("cascade")
      .onDelete("cascade")
      .notNullable();
      table
      .integer("id_user")
      .unsigned()
      .references("id")
      .inTable("users")
      .onUpdate("cascade")
      .onDelete("cascade")
      .notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('homes')
  }
}

module.exports = HomeSchema
