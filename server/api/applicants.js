const express = require("express");
const applicantsRouter = express.Router();

const { getAllApplicants } = require("../db");

applicantsRouter.get("/", async (req, res, next) => {
  try {
    const allApplicants = await getAllApplicants();

    res.send({
      allApplicants,
    });
  } catch ({ name, message }) {
    next({ name, message });
  }
});

module.exports = applicantsRouter;
