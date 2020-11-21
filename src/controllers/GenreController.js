let helper = require('../helper/index')
let GenreModels = require('../models/GenreModels')


module.exports = {
    GetAllGenre: async function(request, response){
        let byFile = request.query.field == null ? '' : ` WHERE ${request.query.field} LIKE "%${request.query.search}%"`
        try{
            let result = await GenreModels.GetGenreModels(byFile)
            return helper.response(response, 'success', result, 201)
        }catch(error){
            console.log(error)
            return helper.response(response, 'failed', 'internal server error', 500)
        }
    },
    CreateGenre: async function(request, response){
        try{
            let SetData = request.body
            let result = await GenreModels.CreateGenreModels(SetData)
            return helper.response(response, 'success', result, 201)
        }catch(error){
            console.log(error)
            return helper.response(response, 'failed', 'internal server error', 500)
        }
    },
    UpdateGenre: async function(request, response){
        try{
            let id = request.params.id
            let setData = request.body.name_genre
            let result = await GenreModels.UpdateGenreModels(id, setData)
            return helper.response(response, 'success', result, 201)

        }catch(error){
            console.log(error)
            return helper.response(response, 'failed', 'internal server error', 500)
        }
    },
    DeleteGenre: async function(request, response){
        try{
            let id = request.params.id
            let result = await GenreModels.DeleteGenreModels(id)
        return helper.response(response, 'success', result, 201)
        }catch(error){
            console.log(error)
            return helper.response(response, 'failed', 'internal server error', 500)
        }
    }
}