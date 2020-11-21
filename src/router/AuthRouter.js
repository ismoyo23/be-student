let express = require("express");
let router = express.Router();
let AuthUser = require("../controllers/AuthController");
let upload = require("../multer/settings");
router.post("/register", AuthUser.Register);
router.post("/login", AuthUser.Login);
router.post("/refreshtoken", AuthUser.RefreshToken);
router.get("/user", AuthUser.GetUsers);
router.post("/user", AuthUser.addUsers);
router.post("/user/excel", upload.single("excel"), AuthUser.addUsersExcel);
router.delete("/user/:id", AuthUser.deleteUsers);
router.put("/user/:id", AuthUser.updateUsers);

module.exports = router;
