let conn = require("../helper/mysql");

module.exports = {
  AuthRegister: function (setData) {
    return new Promise((resolve, reject) => {
      conn.query(
        `INSERT INTO users (username, password) VALUES ('${setData.username}', '${setData.password}')`,
        function (error, result) {
          if (error) {
            reject(error);
          } else {
            let newData = {
              id: result.insertId,
              ...setData,
            };
            resolve(newData);
          }
        }
      );
    });
  },

  AuthLogin: function (setData) {
    return new Promise((resolve, reject) => {
      conn.query(`SELECT * FROM users WHERE username = '${setData.username}'`, function (
        error,
        result
      ) {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  },

};
