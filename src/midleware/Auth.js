const jwt = require('jsonwebtoken');
const config = require('../config/global');
const helper = require('../helper/index');

module.exports = {
  verifyJwtToken: function(request, response, next) {
    const splitToken = request.headers.authorization.split(' ');
    let token = '';
    if(splitToken.length > 1) {
      token = splitToken.pop();
    } else {
      token = request.headers.authorization;
    }
    try {
      const decoded = jwt.verify(token, config.jwtSecretKey);
      request.decodedToken = decoded;
      if(decoded.role === 0 || decoded.role === 1){
        next();
      }else{
        return helper.response(response, 'fail', 'Invalid token!', 401);
      }

      next();
    } catch (error) {
      if(error.name === 'TokenExpiredError') {
        return helper.response(response, 'fail', 'Token expired!', 401);
      } 
      return helper.response(response, 'fail', 'Invalid token!', 401);
    }
  },

  LibrarianKey: function(request, response, next) {
    const splitToken = request.headers.authorization.split(' ');
    let token = '';
    if(splitToken.length > 1) {
      token = splitToken.pop();
    } else {
      token = request.headers.authorization;
    }
    try {
      const decoded = jwt.verify(token, config.jwtSecretKey);
      request.decodedToken = decoded;
      if(decoded.role === 1){
        next();
      }else{
        return helper.response(response, 'fail', 'Invalid token!', 401);
      }
      
    } catch (error) {
      if(error.name === 'TokenExpiredError') {
        return helper.response(response, 'fail', 'Token expired!', 401);
      } 
      return helper.response(response, 'fail', 'Invalid token!', 401);
    }
  }
  

};


