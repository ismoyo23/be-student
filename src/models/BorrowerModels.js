let conn = require("../helper/mysql");

module.exports = {
  GetBorrowerModels: function (name_user, checkData) {
    return new Promise((resolve, reject) => {
      conn.query(
        "SELECT id, nik, id_borrower, id_book,name_user, borrower.id_user, class, title, status, rak, image,create_at, borrower.updated_at ,majors, count FROM borrower INNER JOIN book_detail ON borrower.id_book = book_detail.id INNER JOIN users ON borrower.id_user = users.id_user" +
          name_user +
          checkData,
        function (error, result) {
          if (error) {
            reject(error);
          }
          resolve(result);
        }
      );
    });
  },

  CreateBorrowerModels: function (setData) {
    return new Promise((resolve, reject) => {
      conn.query(`INSERT INTO borrower SET ?`, [setData], function (
        error,
        result
      ) {
        if (error) {
          reject(error);
        }
        let newData = {
          ...setData,
        };
        resolve(newData);
      });
    });
  },

  AddUpBorrow: function (setData) {
    return new Promise((resolve, reject) => {
      conn.query(`INSERT INTO report_borrow SET ?`, [setData], function (
        error,
        result
      ) {
        if (error) {
          reject(error);
        }
        let newData = {
          ...setData,
        };
        resolve(newData);
      });
    });
  },

  UpdateBorrowerModels: function (id, setData) {
    return new Promise((resolve, reject) => {
      conn.query(
        `UPDATE borrower SET id_book = '${setData.id_book}', id_user= '${setData.id_user}', count= '${setData.count}', status='${setData.status}', updated_at = '${setData.updated_at}' WHERE id_borrower = ${id}`,
        function (error, result) {
          if (error) {
            reject(error);
          }
          let newData = {
            id: id,
            ...setData,
          };
          resolve(newData);
        }
      );
    });
  },

  DeleteBorrowerModels: function (id) {
    return new Promise((resolve, reject) => {
      conn.query(
        'DELETE FROM borrower WHERE id_borrower= "' + id + '"',
        function (error, result) {
          if (error) {
            reject(error);
          }

          resolve(result);
        }
      );
    });
  },

  CountBorrowerModels: function (param) {
    return new Promise((resolve, reject) => {
      conn.query(
        `SELECT majors,class,nik,title, date, name_user, COUNT(*) as count FROM report_borrow INNER JOIN book_detail ON report_borrow.id_books = book_detail.id INNER JOIN users ON users.id_user = report_borrow.id_user GROUP BY ${param} ORDER BY count DESC`,
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
