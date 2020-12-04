'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Materia = use("App/Models/Materia")

/**
 * Resourceful controller for interacting with materias
 */
class MateriaController {
  /**
   * Show a list of all materias.
   * GET materias
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const materia = await Materia.all()
    return materia
  }

 


  /**
   * Create/save a new materia.
   * POST materias
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const dados = request.only(["materias"])
    const materia = await Materia.create(dados)
    return materia
  }

  /**
   * Display a single materia.
   * GET materias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const materia = await Materia.findOrFail(params.id)
  }

  /**
   * Render a form to update an existing materia.
   * GET materias/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update materia details.
   * PUT or PATCH materias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const materia = await Materia.findOrFail(params.id)
    const {materias,id_materias}=request.only(["materias","id_materias"])
    materia.id_materias = id_materias
    materia.materias = materias
    await materia.save()
    return materia
  }

  /**
   * Delete a materia with id.
   * DELETE materias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const materia = await Materia.findOrFail(params.id)
    await materia.delete()
    return materia
  }
}

module.exports = MateriaController
