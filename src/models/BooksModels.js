let conn = require("../helper/mysql");

module.exports = {
  AllBooksModel: function (param) {
    return new Promise((resolve, reject) => {
      conn.query(
        `SELECT id, rak,book_detail.id_genre,pdf_name, book_detail.id_author, title, stok, image, name_author, profile_author, name_genre, ISBN, edition, TraceContents, placePublication, DiscriptionBook, publisher, classification, year, bibiografi, Iindex, collation,note, author2, number_investaris,no_call1, no_call2, no_call3, info_1, info_2 FROM book_detail INNER JOIN genre ON book_detail.id_genre = genre.id_genre INNER JOIN author ON book_detail.id_author = author.id_author ${param.byfield}${param.sort}${param.page}${param.antrian6}${param.catalog3}`,
        function (error, result) {
          if (error) {
            reject(error);
          }
          resolve(result);
        }
      );
    });
  },

  GetBooksById: function (id) {
    return new Promise((resolve, reject) => {
      conn.query('SELECT * FROM book_detail WHERE id = "' + id + '"', function (
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

  CreateBooksModel: function (setData) {
    return new Promise((resolve, reject) => {
      conn.query(
        `INSERT INTO book_detail SET ?`, [setData],
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

  CreateBooksExcel: function (data) {
    return new Promise((resolve, reject) => {
      conn.query(
        `INSERT INTO book_detail(id, title, rak, image,stok ,id_genre, id_author, ISBN, edition, TraceContents, DiscriptionBook, Iindex, year, publisher, bibiografi ,note, author2, collation, number_investaris, no_call1, no_call2, no_call3, info_1, info_2) VALUES ?`,
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

  UpdateBooksModel: function (setData, id) {
    return new Promise((resolve, reject) => {
      conn.query(
        `UPDATE book_detail SET ? WHERE id = ?`, [setData, id],
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

  DeleteBooksModels: function (id) {
    return new Promise((resolve, reject) => {
      conn.query("DELETE FROM book_detail WHERE id = " + id + "", function (
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
