const express = require("express");
const router = express.Router();
const { sendEmail } = require("../controllers/mailingCtrl");

router.post("/send", sendEmail);

module.exports = router;
