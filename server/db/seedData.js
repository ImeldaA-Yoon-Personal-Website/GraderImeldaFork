const { client, createApplicant, getAllApplicants } = require("./index");

async function createInitialApplicants() {
  console.log("Starting to create applicants...");
  try {
    const applicantsToCreate = [
      { id: 1, firstname: "Susan", lastname: "Salian" },
      { id: 2, firstname: "Min", lastname: "Yun" },
      { id: 3, firstname: "Cassy", lastname: "Ambly" },
      { id: 4, firstname: "Eddy", lastname: "Bunt" },
      { id: 5, firstname: "Diane", lastname: "Hines" },
      { id: 6, firstname: "Judy", lastname: "Zint" },
    ];
    const applicants = await Promise.all(
      applicantsToCreate.map(createApplicant)
    );

    console.log("Finished creating applicants!");
  } catch (error) {
    console.error("Error creating applicants!");
    throw error;
  }
}

module.exports = {
  createInitialApplicants,
};
