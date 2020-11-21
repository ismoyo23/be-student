let helper = require("../helper/index");
let AuthModels = require("../models/AuthModels");
let PasswordHash = require("password-hash");
let jwt = require("jsonwebtoken");
let config = require("../config/global");
let xlxs = require("xlsx");

module.exports = {
  Register: async function (request, response) {
    let setData = {
      name_user: request.body.name_user,
      email: request.body.email,
      password: PasswordHash.generate(request.body.password),
      address: request.body.address,
      role: request.body.role,
    };
    try {
      let result = await AuthModels.AuthRegister(setData);
      return helper.response(response, "success", result, 201);
    } catch (error) {
      console.log(error);
      return helper.response(response, "failed", "internal server error", 500);
    }
  },

  Login: async function (request, response) {
    let setData = {
      nik: request.body.nik,
    };
    try {
      let result = await AuthModels.AuthLogin(setData);

      if (result[0].role == 0) {
        // role 0 is user
        let tokenData = {
          ...result[0],
        };
        delete result[0].password;
        let AccessToken = jwt.sign(tokenData, config.jwtSecretKey, {
          expiresIn: "2d",
        });
        result[0].AccessToken = AccessToken;
      } else {
        // role 1 is Librarian
        delete result[0].password;
        let tokenData = {
          ...result[0],
        };
        let AccessToken = jwt.sign(tokenData, config.jwtSecretKey, {
          expiresIn: "2d",
        });
        result[0].AccessToken = AccessToken;
      }
      return helper.response(response, "success", result, 201);
    } catch (error) {
      console.log(error);
      return helper.response(response, "failed", "internal server error", 500);
    }
  },

  addUsersExcel: async function (request, response) {
    let wb = xlxs.readFile(`src/upload/${request.file.filename}`);
    let ws = wb.Sheets["Sheet JS"];
    let data = xlxs.utils.sheet_to_json(ws);
    let array = [];
    for (let i = 0; i < data.length; i++) {
      let setData = [
        data[i].Nama,
        data[i].Kelas,
        data[i].Role,
        data[i].Jurusan,
        data[i].Nis,
      ];
      array.push(setData);
    }
    try {
      let result = AuthModels.AddUsersExcel(array);
      return helper.response(response, "success", result, 201);
    } catch (error) {
      console.log(error);
      return helper.response(response, "failed", "internal serve error", 500);
    }
  },

  RefreshToken: (request, response) => {
    let verify = request.headers.authorization;
    const decoded = jwt.verify(verify, config.jwtSecretKey);
    delete decoded.exp;
    delete decoded.iat;
    let tokenData = {
      ...decoded,
    };
    let AccessToken = jwt.sign(tokenData, config.jwtSecretKey, {
      expiresIn: "5d",
    });
    decoded.RefreshToken = AccessToken;

    return helper.response(response, "success", decoded, 201);
  },

  GetUsers: async function (request, response) {
    try {
      // conditions for paginations, search, sort
      let param =
        request.query.field === undefined
          ? ""
          : `WHERE ${request.query.field} LIKE '${request.query.search}'`;

      let result = await AuthModels.GetUsers(param);
      return helper.response(response, "success", result, 201);
    } catch (error) {
      console.log(error);
      return helper.response(response, "fail", "Internal Server Error", 500);
    }
  },

  addUsers: async function (request, response) {
    try {
      // conditions for paginations, search, sort
      let setData = {
        name_user: request.body.name_user,
        class: request.body.class,
        role: request.body.role,
        majors: request.body.majors,
        nik: request.body.nik,
      };

      let result = await AuthModels.AddUsers(setData);
      return helper.response(response, "success", result, 201);
    } catch (error) {
      console.log(error);
      return helper.response(response, "fail", "Internal Server Error", 500);
    }
  },

  deleteUsers: async function (request, response) {
    try {
      // conditions for paginations, search, sort
      id = request.params.id;
      console.log(id);
      let result = await AuthModels.deleteData(id);
      return helper.response(response, "success", result, 201);
    } catch (error) {
      console.log(error);
      return helper.response(response, "fail", "Internal Server Error", 500);
    }
  },

  updateUsers: async function (request, response) {
    try {
      // conditions for paginations, search, sort
      id = request.params.id;
      let setData = {
        name_user: request.body.name_user,
        class: request.body.class,
        role: request.body.role,
        majors: request.body.majors,
        nik: request.body.nik,
      };

      console.log(setData);
      let result = await AuthModels.UpdatedUsers(setData, id);
      return helper.response(response, "success", result, 201);
    } catch (error) {
      console.log(error);
      return helper.response(response, "fail", "Internal Server Error", 500);
    }
  },
};
