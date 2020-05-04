const express = require("express");

const eStoreController = require("../controllers/eStore-sections-controller");

const router = express.Router();

router.get("/:sid", eStoreController.getSectionDataById);

module.exports = router;
