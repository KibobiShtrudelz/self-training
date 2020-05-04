const express = require("express");

const eStoreController = require("../controllers/eStore-sections-controller");

const router = express.Router();

router.get("/:sectionId", eStoreController.getSectionDataById);

module.exports = router;
