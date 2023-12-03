//client from pg; async funtions for database

const { Client } = require("pg"); // Import pg module
require("dotenv").config();

const client = new Client({
  connectionString: process.env.DATABASE_URL || "https://localhost:5432/grader",
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : undefined,
});
async function createApplicant({ firstname, lastname }) {
  try {
    const {
      rows: [applicant],
    } = await client.query(
      `
      INSERT INTO applicants(firstname, lastname)
      VALUES($1, $2)
      RETURNING *;
      `,
      [firstname, lastname]
    );
    return applicant;
  } catch (error) {
    console.log("createApplicant() throws error");
    throw error;
  }
}
async function getAllApplicants() {
  try {
    const { rows } = await client.query(`
      SELECT *
      FROM applicants;
    `);
    return rows;
  } catch (error) {
    throw error;
  }
}
module.exports = {
  client,
  createApplicant,
  getAllApplicants,
};
