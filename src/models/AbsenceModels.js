let conn = require("../helper/mysql");

module.exports = {
  AddAbsence: function (setData) {
    return new Promise((resolve, reject) => {
      conn.query(`INSERT INTO absence SET ?`, [setData], function (
        error,
        result
      ) {
        if (error) {
          reject(error);
        } else {
          let newData = {
            id: result.insertId,
            ...setData,
          };
          resolve(newData);
        }
      });
    });
  },

  GetAbsence: function (param, param2) {
    return new Promise((resolve, reject) => {
      conn.query(
        `SELECT users.nik, class, name_user, majors, absence.created_at, role FROM absence INNER JOIN users ON absence.nik = users.nik ${param} ${param2}`,
        function (error, result) {
          if (error) {
            reject(error);
          }
          resolve(result);
        }
      );
    });
  },

  CountAbsence: function (param) {
    return new Promise((resolve, reject) => {
      conn.query(
        `SELECT date, COUNT(*) as count FROM absence ${param} GROUP BY date`,
        function (error, result) {
          if (error) {
            reject(error);
          }
          resolve(result);
        }
      );
    });
  },
};
