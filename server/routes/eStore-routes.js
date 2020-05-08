const { Router } = require("express");

const eStoreController = require("../controllers/eStore-sections-controller");

const router = Router();

router.get("/:sectionId", eStoreController.getSectionDataById);

module.exports = router;
