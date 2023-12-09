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

//APPLICANT METHODS
async function createApplicant({ firstname, middlename, lastname }) {
  try {
    const {
      rows: [applicant],
    } = await client.query(
      `
      INSERT INTO applicants(firstname, middlename, lastname)
      VALUES($1, $2, $3)
      RETURNING *;
      `,
      [firstname, middlename, lastname]
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
async function getApplicantById(id) {
  try {
    const {
      rows: [applicant],
    } = await client.query(`SELECT * FROM applicants WHERE id = $1`, [id]);

    if (!applicant) {
      throw {
        name: "ApplicantID)NotFoundError",
        message: `Applicant with id: ${id} does not exist`,
      };
    }
    return applicant;
  } catch (error) {
    throw error;
  }
}
async function updateApplicant(id, firstname, middlename, lastname) {
  try {
    const {
      rows: [applicant],
    } = await client.query(
      `UPDATE applicants SET firstname = $2, middlename = $3, lastname = $4 WHERE id=$1 RETURNING *;`,
      [id, firstname, middlename, lastname]
    );
    return applicant;
  } catch (error) {
    throw error;
  }
}
async function deleteApplicantById(id) {
  try {
    const {
      rows: [applicant],
    } = await client.query(
      `
      DELETE FROM applicants WHERE id = $1 RETURNING *;`,
      [id]
    );
    return applicant;
  } catch (error) {
    throw error;
  }
}
//USERS METHODS
async function createUser({ firstname, lastname, email, password, status }) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
      INSERT INTO users(firstname, lastname, email, password, status)
      VALUES($1, $2, $3, $4, $5)
      RETURNING *;
      `,
      [firstname, lastname, email, password, status]
    );
    return user;
  } catch (error) {
    console.log("createUser() throws error");
    throw error;
  }
}
async function getAllUsers() {
  try {
    const { rows } = await client.query(`
      SELECT *
      FROM users;
    `);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function getUserById(id) {
  try {
    const {
      rows: [user],
    } = await client.query(`SELECT * FROM users WHERE id = $1`, [id]);

    if (!user) {
      throw {
        name: "User(ID)NotFoundError",
        message: `User with id: ${id} does not exist`,
      };
    }
    return user;
  } catch (error) {
    throw error;
  }
}

async function updateUser(id, firstname, lastname, email, password, status) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `UPDATE users SET firstname = $2, lastname= $3, email = $4, password = $5, status = $6 WHERE id=$1 RETURNING *;`,
      [id, firstname, lastname, email, password, status]
    );
    return user;
  } catch (error) {
    throw error;
  }
}

async function deleteUserById(id) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
  DELETE FROM users
  WHERE id = $1
  RETURNING *;
  `,
      [id]
    );
    return user;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  client,
  createApplicant,
  getAllApplicants,
  getApplicantById,
  updateApplicant,
  deleteApplicantById,
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUserById,
};
