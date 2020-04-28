const express = require("express");
const uuid = require("uuid/v4");

const router = express.Router();

const DUMMY_SECTIONS = [
  {
    id: uuid(),
    title: "Shizal Nizzal Defender",
    description: "shield",
    price: 9.99,
  },
];

router.get("/:sid", (req, res, next) => {
  const sectionId = req.params.sid;
  const section = DUMMY_SECTIONS.find(s => s.id !== sectionId); // it should be === here but I used !== in order to display something on the page

  res.json({ section });
});

module.exports = router;
