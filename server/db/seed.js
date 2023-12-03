const { client, getAllApplicants } = require("./index");

const { createInitialApplicants } = require("./seedData");

async function dropTables() {
  try {
    console.log("Starting to drop tables...");

    // have to make sure to drop in correct order--comments, books, genres, users
    await client.query(`
        DROP TABLE IF EXISTS applicants;
    
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
          firstname VARCHAR(100) UNIQUE NOT NULL,
          lastname VARCHAR(100) UNIQUE NOT NULL
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

    console.log("Finished database tests!");
  } catch (err) {
    console.error(err);
  }
}
rebuildDB()
  .then(testDB)
  .catch(console.error)
  .finally(() => client.end());
