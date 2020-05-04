const HttpError = require("../models/http-error");

const FAKE_SECTION_DATA = require("../fakeData/fakeEstoreItems.json");

const getSectionDataById = (req, res, next) => {
  const sectionId = req.params.sid;

  switch (sectionId) {
    case "section-1":
      res.json(FAKE_SECTION_DATA);
      break;

    case "section-2":
      res.json(FAKE_SECTION_DATA);
      break;

    case "section-3":
      res.json(FAKE_SECTION_DATA);
      break;

    case "section-4":
      res.json(FAKE_SECTION_DATA);
      break;

    default:
      throw new HttpError(404, "Please chose valid section!");
  }
};

exports.getSectionDataById = getSectionDataById;
