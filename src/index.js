var express = require("express");
let router = express.Router();

let Auth = require("./router/AuthRouter")
let Home = require("./router/Home");


router.use("/home", Home);
router.use("/auth", Auth);

module.exports = router;
