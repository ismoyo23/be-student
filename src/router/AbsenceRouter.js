let express = require("express");
let router = express.Router();
let AbsenceController = require("../controllers/AbsenceController");

router.post("/add", AbsenceController.AddDataAbsence);
router.get("/get", AbsenceController.GetAbsence);
router.get("/count", AbsenceController.CountAbsence);

module.exports = router;
