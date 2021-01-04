let helper = require("../helper/index");
let BooksModels = require("../models/BooksModels");
let xlxs = require("xlsx");

let fs = require("fs");
module.exports = {
  GetAllBooks: async function (request, response) {
    try {
      // conditions for paginations, search, sort

      let param = {
        byfield:
          request.query.search == null
            ? ""
            : `WHERE ${request.query.field} LIKE "%${request.query.search}%"`,
        sort:
          request.query.sort == null
            ? ""
            : ` ORDER BY book_detail.id ${request.query.sort}`,
        page:
          request.query.page == null || undefined
            ? ""
            : `  LIMIT 12 OFFSET ${request.query.page}`,

        antrian6: request.query.antrian1 == null ? '' : `WHERE id in ("${request.query.antrian1}", "${request.query.antrian2}", "${request.query.antrian3}", "${request.query.antrian4}", "${request.query.antrian5}", "${request.query.antrian6}") `,

        catalog3: request.query.catalog1 == null ? '' : `WHERE id in("${request.query.catalog1}", "${request.query.catalog2}", "${request.query.catalog3}")`
      };
      console.log(param)
      let result = await BooksModels.AllBooksModel(param);
     
      return helper.response(response, "success", result, 201);
    } catch (error) {
      console.log(error);
      return helper.response(response, "fail", "Internal Server Error", 500);
    }
  },

  CreateBooks: async function (request, response) {
    let setData = {
      id: request.body.id,
      title: request.body.title,
      rak: request.body.rak,
      image: request.files.image == undefined ? 'photo_galery.jpg' : request.files.image[0].path,
      pdf_name:
        request.files.pdf_name == undefined
          ? "null"
          : request.files.pdf_name[0].path,
      stok: request.body.stok,
      id_genre: request.body.id_genre,
      id_author: request.body.id_author,
      ISBN: request.body.isbn,
      
      edition: request.body.edition,
      TraceContents: request.body.TraceContents,
      DiscriptionBook: request.body.DiscriptionBook,
      
      year: request.body.year,
      publisher: request.body.publisher,
      bibiografi: request.body.bibiografi,
      Iindex: request.body.index,
      note: request.body.note,
      author2: request.body.author2,
      collation: request.body.collation,
      number_investaris: request.body.number_investaris,
      no_call1: request.body.no_call1,
      no_call2: request.body.no_call2,
      no_call3: request.body.no_call3,
      info_1: request.body.info1,
      info_2: request.body.info2
    };

    try {
      let result = await BooksModels.CreateBooksModel(setData);
      return helper.response(response, "success", result, 201);
    } catch (error) {
      console.log(error);
      return helper.response(response, "failed", "internal serve error", 500);
    }
  },

  UploadBooksExcel: async function (request, response) {
    let wb = xlxs.readFile(`src/upload/${request.file.filename}`);
    let ws = wb.Sheets["Sheet JS"];
    let data = xlxs.utils.sheet_to_json(ws);
    let array = [];
    for (let i = 0; i < data.length; i++) {
      let setData = [
        
        data[i].KodeBuku,
        data[i].JudulBuku,
        data[i].rak,
        data[i].image,
        data[i].stok,
        data[i].idGenre,
        data[i].idAuthor,
        data[i].ISBN,
        data[i].edition,
        data[i].TraceContents,
        data[i].DiscriptionBook,
        data[i].Index,
        data[i].year,
        data[i].publisher,
        data[i].bibiografi,
        data[i].note,
        data[i].author2,
        data[i].collation,
        data[i].number_investaris,
        data[i].no_panggil_1,
        data[i].no_panggil_2,
        data[i].no_panggil_3,
        data[i].info1,
        data[i].info2,
        
       
      ];
      array.push(setData);
    }
    try {
      let result = await BooksModels.CreateBooksExcel(array);
      return helper.response(response, "success", result, 201);
    } catch (error) {
      console.log(error);
      return helper.response(response, "failed", "internal serve error", 500);
    }
  },

  UpdateBooks: async function (request, response) {
    let id = request.params.id;
    let param = {
      byfield:
          id == null
            ? ""
            : `WHERE id LIKE "%${id}%"`,
      sort: '',
      page: '',
      antrian6: '',
      catalog3: ''
    };

    let result = await BooksModels.AllBooksModel(param);
    let setData = {
      title: request.body.title,
      rak: request.body.rak,
      image: request.files.image == null ? result[0].image : `src/upload/${request.files.image[0].filename}`,
      pdf_name:
        request.files.pdf_name == null
          ? `${result[0].pdf_name}`
          : request.files.pdf_name[0].path,
      stok: request.body.stok,
      id_genre: request.body.id_genre,
      id_author: request.body.id_author,
      ISBN: request.body.isbn,
      edition: request.body.edition,
      TraceContents: request.body.TraceContents,
      DiscriptionBook: request.body.DiscriptionBook,
      Iindex: request.body.index,
      note: request.body.note,
      author2: request.body.author2,
      collation: request.body.collation,
      number_investaris: request.body.number_investaris,
      no_call1: request.body.no_call1,
      no_call2: request.body.no_call2,
      no_call3: request.body.no_call3,
      info_1: request.body.info1,
      info_2: request.body.info2
    };
  
    try {
      let result = await BooksModels.UpdateBooksModel(setData, id);

      return helper.response(response, "success", result, 201);
  
    } catch (error) {
      console.log(error);
      return helper.response(response, "failed", "internal server error", 500);
    }
  },

  DeleteBooks: async function (request, response) {
    try {
      let id = request.params.id;
      let PathImage = await BooksModels.GetBooksById(id);
      // fs unlink for delete image on storage
      fs.unlink(PathImage[0].image, async function (err) {
        let result = await BooksModels.DeleteBooksModels(id);

        return helper.response(
          response,
          "success",
          "success delete id =" + id,
          201
        );

        return helper.response(response, "success", result, 201);
      });
    } catch (error) {
      console.log(RangeError);
      return helper.response(response, "failed", "internal server error", 500);
    }
  },
};
