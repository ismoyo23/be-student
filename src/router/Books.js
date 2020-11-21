let express = require("express");
let router = express.Router();
let BooksController = require("../controllers/BooksController");
let upload = require("../multer/settings");
let AuthMidleware = require("../midleware/Auth");

router.get("/", BooksController.GetAllBooks);
router.post(
  "/",
  upload.fields([
    {
      name: "image",
      maxCount: 1,
    },
    {
      name: "pdf_name",
      maxCount: 1,
    },
  ]),
  BooksController.CreateBooks
);
router.post("/excel", upload.single("excel"), BooksController.UploadBooksExcel);
router.put("/:id", upload.fields([
    {
      name: "image",
      maxCount: 1,
    },
    {
      name: "pdf_name",
      maxCount: 1,
    },
  ]), BooksController.UpdateBooks);
router.delete("/:id", BooksController.DeleteBooks);

module.exports = router;

// AuthMidleware.LibrarianKey
