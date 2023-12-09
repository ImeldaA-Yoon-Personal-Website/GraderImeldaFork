const express = require("express");
const applicantsRouter = express.Router();

const {
  createApplicant,
  getAllApplicants,
  getApplicantById,
  deleteApplicantById,
  updateApplicant,
} = require("../db");

applicantsRouter.post("/", async (req, res, next) => {
  const { firstname, middlename, lastname } = req.body;

  const applicantData = {};

  try {
    applicantData.firstname = firstname;
    applicantData.middlename = middlename;
    applicantData.lastname = lastname;

    console.log(`Trying to createApplicant ${applicantData}`);

    const applicant = await createApplicant(applicantData);

    if (applicant) {
      res.send(applicant);
    } else {
      next({
        name: "applicantCreationError",
        message:
          "There was an error creationg your applicant. Please try again. Possibly applicant's name is not unique or pre-existing",
      });
    }
  } catch ({ name, message }) {
    next({ name, message });
  }
});
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
applicantsRouter.get("/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    const applicant = await getApplicantById(id);

    res.send({ applicant });
  } catch ({ name, message }) {
    next({ name, message });
  }
});
applicantsRouter.patch("/:id", async (req, res, next) => {
  const { id } = req.params;
  const { firstname, lastname } = req.body;

  try {
    const updatedApplicant = await updateApplicant(id, firstname, lastname);

    res.send({ applicant: updatedApplicant });
  } catch ({ name, message }) {
    console.error({ name, message });
    next({ name, message });
  }
});
applicantsRouter.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const applicant = await deleteApplicantById(id);

    if (!applicant) {
      next({
        name: "NotFound",
        message: `Cannot find applicant with ID ${id} to delete.`,
      });
    } else {
      res.send({ success: true, applicant });
    }
  } catch ({ name, message }) {
    next({ name, message });
  }
});
module.exports = applicantsRouter;
