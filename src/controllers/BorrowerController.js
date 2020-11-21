let helper = require("../helper/index");
let BorrowerModels = require("../models/BorrowerModels");

module.exports = {
  GetAllBorrower: async function (request, response) {
    try {
      let name_user =
        request.query.search == null
          ? ""
          : ` WHERE ${request.query.field} LIKE "%${request.query.search}%"`;
      let checkData =
        request.query.search2 == null
          ? ""
          : " AND " +
            request.query.field2 +
            ' = "' +
            request.query.search2 +
            '"';
      let result = await BorrowerModels.GetBorrowerModels(name_user, checkData);
      return helper.response(response, "success", result, 201);
    } catch (error) {
      console.log(error);
      return helper.response(response, "failed", "internal server error", 500);
    }
  },
  CreateBorrower: async function (request, response) {
    try {
      let setData = request.body;

      let result = await BorrowerModels.CreateBorrowerModels(setData);
      return helper.response(response, "success", result, 201);
    } catch (error) {
      console.log(error);
      return helper.response(response, "failed", "internal server error", 500);
    }
  },
  UpdateBorrower: async function (request, response) {
    try {
      let id = request.params.id;
      let setData = {
        id_book: request.body.id_books,
        id_user: request.body.id_user,
        count: request.body.count,
        status: request.body.status,
        updated_at: request.body.updated_at,
      };
      let result = await BorrowerModels.UpdateBorrowerModels(id, setData);
      return helper.response(response, "success", result, 201);
    } catch (error) {
      console.log(error);
      return helper.response(response, "failed", "internal server error", 500);
    }
  },
  DeleteBorrower: async function (request, response) {
    try {
      let id = request.params.id;
      let result = await BorrowerModels.DeleteBorrowerModels(id);
      return helper.response(response, "success", result, 201);
    } catch (error) {
      console.log(error);
      return helper.response(response, "failed", "internal server error", 500);
    }
  },

  CreateUpBorrow: async function (request,response) {
    let setData = request.body;
    try {
      let result = await BorrowerModels.AddUpBorrow(setData);
      return helper.response(response, "success", result, 201);
    } catch (error) {
      console.log(error);
      return helper.response(response, "failed", "internal server error", 500);
    }
  },

  CountBorrower: async function (request, response) {
    let param = request.query.field;
    try {
      let result = await BorrowerModels.CountBorrowerModels(param);
      return helper.response(response, "success", result, 201);
    } catch (error) {
      console.log(error);
      return helper.response(response, "failed", "internal server error", 500);
    }
  },
};
