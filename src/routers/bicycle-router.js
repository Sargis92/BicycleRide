const express = require("express");
const router = express.Router();

const { getBicycles } = require("../controllers/bicycle-controller");



router.get("/", getBicycles);


module.exports = router;