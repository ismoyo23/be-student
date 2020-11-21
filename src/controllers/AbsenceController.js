let helper = require("../helper/index");
let AbsenceModels = require("../models/AbsenceModels");

module.exports = {
  AddDataAbsence: async function (request, response) {
    let setData = request.body;
    try {
      let result = await AbsenceModels.AddAbsence(setData);
      return helper.response(response, "success", result, 201);
    } catch (error) {
      console.log(error);
      return helper.response(response, "failed", "internal server error", 500);
    }
  },

  GetAbsence: async function (request, response) {
    let param = request.query.search == null ? '' : `WHERE ${request.query.field} LIKE "%${request.query.search}%"`;
    let param2 = request.query.search2 == null ? '' : `AND ${request.query.field2} LIKE "%${request.query.search2}%"`;
    try {
      let result = await AbsenceModels.GetAbsence(param, param2);
      return helper.response(response, "success", result, 201);
    } catch (error) {
      console.log(error);
      return helper.response(response, "failed", "internal server error", 500);
    }
  },

  CountAbsence: async function (request,response) {
    try {
      let param = request.query.param == null ? '' : `WHERE date BETWEEN '${request.query.param}' AND '${request.query.param2}'`;
      let result = await AbsenceModels.CountAbsence(param);
      return helper.response(response, "success", result, 201);
    } catch (error) {
      console.log(error);
      return helper.response(response, "failed", "internal server error", 500);
    }
  } 

};
