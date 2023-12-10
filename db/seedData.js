const {
  // client,
  createApplicant,
  // getAllApplicants,
  createUser,
} = require("./index");

async function createInitialApplicants() {
  console.log("Starting to create applicants...");
  try {
    const applicantsToCreate = [
      { id: 1, firstname: "Susan", middlename: "A", lastname: "Salian" },
      { id: 2, firstname: "Min", middlename: "A", lastname: "Yun" },
      { id: 3, firstname: "Cassy", middlename: "A", lastname: "Ambly" },
      { id: 4, firstname: "Eddy", middlename: "A", lastname: "Bunt" },
      { id: 5, firstname: "Diane", middlename: "A", lastname: "Hines" },
      { id: 6, firstname: "Judy", middlename: "A", lastname: "Zint" },
    ];
    await Promise.all(applicantsToCreate.map(createApplicant));

    console.log("Finished creating applicants!");
  } catch (error) {
    console.error("Error creating applicants!");
    throw error;
  }
}
async function createInitialUsers() {
  try {
    console.log("Starting to create users...");

    await createUser({
      firstname: "FAdmin1",
      lastname: "LAdmin1",
      email: "admin1@gmail.com",
      password: "admin1",
      status: "admin",
    });

    await createUser({
      firstname: "FAdmin2",
      lastname: "LAdmin2",
      email: "admin2@gmail.com",
      password: "admin2",
      status: "admin",
    });

    await createUser({
      firstname: "FUser3",
      lastname: "LUser3",
      email: "test3@gmail.com",
      password: "tester3",
      status: "user",
    });

    await createUser({
      firstname: "FUser4",
      lastname: "LUser4",
      email: "test4@gmail.com",
      password: "tester4",
      status: "user",
    });

    await createUser({
      firstname: "FUser5",
      lastname: "LUser5",
      email: "test5@gmail.com",
      password: "tester5",
      status: "user",
    });
    console.log("Finished creating users!");
  } catch (error) {
    console.error("Error creating users!");
    throw error;
  }
}
module.exports = {
  createInitialApplicants,
  createInitialUsers,
};
