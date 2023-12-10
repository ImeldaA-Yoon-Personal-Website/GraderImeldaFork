const { client, getAllApplicants, getAllUsers } = require("./index");

const { createInitialApplicants, createInitialUsers } = require("./seedData");

async function dropTables() {
  try {
    console.log("Starting to drop tables...");

    await client.query(`
        DROP TABLE IF EXISTS applicants;
        DROP TABLE IF EXISTS users;
      `);

    console.log("Finished dropping tables!");
  } catch (error) {
    console.error("Error dropping tables!");
    throw error;
  }
}
async function createTables() {
  try {
    console.log("Starting to build tables...");

    await client.query(`
      CREATE TABLE applicants (
          id SERIAL PRIMARY KEY,
          firstname VARCHAR(100) NOT NULL,
          middlename VARCHAR(100),
          lastname VARCHAR(100) UNIQUE NOT NULL
      );
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        firstname VARCHAR(100) NOT NULL,
        lastname VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(50) NOT NULL,
        status VARCHAR(20)
   
    );
    `);
    console.log("Finished building tables!");
  } catch (error) {
    console.error("Error building tables!");
    throw error;
  }
}
async function rebuildDB() {
  try {
    client.connect();

    await dropTables();
    await createTables();
    await createInitialApplicants();
    await createInitialUsers();
  } catch (error) {
    console.log("Error during rebuildDB");
    throw error;
  }
}
async function testDB() {
  try {
    console.log("Starting to test database...");

    console.log("Calling getAllApplicants");
    const applicants = await getAllApplicants();
    console.log("Result:", applicants);

    console.log("Calling getAllUsers");
    const users = await getAllUsers();
    console.log("Result:", users);

    console.log("Finished database tests!");
  } catch (err) {
    console.error(err);
  }
}
rebuildDB()
  .then(testDB)
  .catch(console.error)
  .finally(() => client.end());
