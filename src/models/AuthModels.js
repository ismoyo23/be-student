let conn = require("../helper/mysql");

module.exports = {
  AuthRegister: function (setData) {
    return new Promise((resolve, reject) => {
      conn.query(
        'INSERT INTO users (name_user, email, password, address, role) VALUES ("' +
          setData.name_user +
          '", "' +
          setData.email +
          '", "' +
          setData.password +
          '", "' +
          setData.address +
          '", "' +
          setData.role +
          '")',
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
      conn.query(`SELECT * FROM users WHERE nik = '${setData.nik}'`, function (
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

  GetUsers: function (params) {
    return new Promise((resolve, reject) => {
      conn.query(`SELECT * FROM users ${params}`, function (error, result) {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  },

  AddUsers: function (setData) {
    return new Promise((resolve, reject) => {
      conn.query(
        `INSERT INTO users(name_user, class, role, majors, letter,nik, address, hp, image) VALUES('${setData.name_user}', '${setData.class}', '${setData.role}', '${setData.majors}', '${setData.letter}', '${setData.nik}', '${setData.address}', ${setData.hp}, '${setData.image}')`,
        function (error, result) {
          if (error) {
            reject(error);
          }
          let newData = {
            ...setData,
          };
          resolve(newData);
        }
      );
    });
  },

  AddUsersExcel: function (data) {
    return new Promise((resolve, reject) => {
      conn.query(
        `INSERT INTO users(name_user, class, role, majors, nik) VALUES ?`,
        [data],
        function (error, result) {
          if (error) {
            reject(error);
          }
          let newData = {
            ...data,
          };
          resolve(newData);
        }
      );
    });
  },

  UpdatedUsers: function (setData, id) {
    return new Promise((resolve, reject) => {
      conn.query(
        `UPDATE users SET ? WHERE ?`, [setData, id],
        function (error, result) {
          if (error) {
            reject(error);
          }
          let newData = {
            ...setData,
          };
          resolve(newData);
        }
      );
    });
  },

  deleteData: function (id) {
    return new Promise((resolve, reject) => {
      conn.query(`DELETE FROM users WHERE id_user = '${id}'`, function (
        error,
        result
      ) {
        if (error) {
          reject(error);
        }

        resolve(result);
      });
    });
  },
};
