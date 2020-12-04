'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SugestaoSchema extends Schema {
  up () {
    this.create('sugestaos', (table) => {
      table.increments()
      table.string('sugestao', 300).notNullable().unique()
      table
      .integer("id_user")
      .unsigned()
      .references("id")
      .inTable("users")
      .onUpdate("cascade")
      .onDelete("cascade")
      .notNullable();
      table
      .integer("id_home")
      .unsigned()
      .references("id")
      .inTable("homes")
      .onUpdate("cascade")
      .onDelete("cascade")
      .notNullable();
      table
      .integer("id_materias")
      .unsigned()
      .references("id")
      .inTable("materias")
      .onUpdate("cascade")
      .onDelete("cascade")
      .notNullable();

      table.timestamps()
    })
  }

  down () {
    this.drop('sugestaos')
  }
}

module.exports = SugestaoSchema
