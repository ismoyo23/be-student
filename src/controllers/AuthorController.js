let helper = require('../helper/index')
let AuthorModels = require('../models/AuthorModels')


module.exports = {
    GetAllAuthor: async function(request, response){
        let byfield = request.query.field == null ? '' : `WHERE ${request.query.field} LIKE "%${request.query.search}%"`
        try{
            let result = await AuthorModels.GetAuthorModels(byfield)
            return helper.response(response, 'success', result, 201)
        }catch(error){
            console.log(error)
            return helper.response(response, 'failed', 'internal server error', 500)
        }
    },
    CreateAuthor: async function(request, response){
        try{
            let setData = {
                name_author: request.body.name_author,
                profile_author: request.body.profile_author
            }
            let result = await AuthorModels.CreateAuthorModels(setData)
            return helper.response(response, 'success', result, 201)
        }catch(error){
            console.log(error)
            return helper.response(response, 'failed', 'internal server error', 500)
        }
    },
    UpdateAuthor: async function(request, response){
        try{
            let id = request.params.id
            let setData = {
                name_author: request.body.name_author,
                profile_author: request.body.profile_author
            }
            let result = await AuthorModels.UpdateAuthorModels(id, setData)
            return helper.response(response, 'success', result, 201)

        }catch(error){
            console.log(error)
            return helper.response(response, 'failed', 'internal server error', 500)
        }
    },
    DeleteAuthor: async function(request, response){
        try{
            let id = request.params.id
            let result = await AuthorModels.DeleteAuthorModels(id)
        return helper.response(response, 'success', result, 201)
        }catch(error){
            console.log(error)
            return helper.response(response, 'failed', 'internal server error', 500)
        }
    }
}