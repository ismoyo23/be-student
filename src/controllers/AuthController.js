let helper = require("../helper/index");
let AuthModels = require("../models/AuthModels");
let PasswordHash = require("password-hash");
let jwt = require("jsonwebtoken");
let config = require("../config/global");

module.exports = {
  Register: async function (request, response) {
    let setData = {
   
      username: request.body.username,
      password: PasswordHash.generate(request.body.password),
     
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
      username: request.body.username,
    };
    try {
      let result = await AuthModels.AuthLogin(setData);

      let pass = result[0].password;
      let passwordInput = request.body.password
      let bypass = PasswordHash.verify(passwordInput,pass)
    
      if (bypass) {
            // role 0 is user
            let tokenData = {
              ...result[0],
            };
          
      
            let AccessToken = jwt.sign(tokenData, config.jwtSecretKey, {
              expiresIn: "2d",
            });
            result[0].AccessToken = AccessToken;
        
          return helper.response(response, "success", result, 201);
        } else {
          const failedRes = {
            msg : 'Username or Password is wrong!'
        }
            return helper.response(response, 'fail', failedRes, 400);
        }
    
        
    } catch (error) {
      console.log(error)
      return helper.response(response, "failed", "internal server error", 500);
    }
  },

 
};
