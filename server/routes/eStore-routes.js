const express = require("express");
const { v4: uuidv4 } = require("uuid");

const router = express.Router();

const FAKE_SECTION_DATA = require("../fakeData/fakeEstoreItems.json");

const DUMMY_SECTIONS = [
  {
    id: uuidv4(),
    title: "Shizal Nizzal Defender",
    description: "shield",
    price: 9.99,
  },
];

router.get("/:sid", (req, res, next) => {
  // TODO: find items by section id
  // const sectionId = req.params.sid;

  res.json({ items: FAKE_SECTION_DATA });
});

module.exports = router;
