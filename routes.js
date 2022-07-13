const express = require("express");
const controller = require("./controller");
const router = express.Router();


router.get("/home", controller.index);


module.exports = router;
