const express = require("express");
const router = express.Router();
const { runQuery } = require("../controllers/queryController");
const validateQuery = require("../middleware/validateQuery");

router.post("/", validateQuery, runQuery);

module.exports = router;