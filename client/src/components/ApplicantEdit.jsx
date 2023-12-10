import React, { useEffect, useState } from "react";
import { BASE_URL } from "../api";

const ApplicantEdit = ({ applicant }) => {
  const [firstName, setFirstName] = useState(applicant.firstname);
  const [middleName, setMiddleName] = useState(applicant.middlename);
  const [lastName, setLastName] = useState(applicant.lastname);

  async function handleUpdateForm(e) {
    e.preventDefault;
    const url = `${BASE_URL}/applicants/${applicant.id}`;
    const bodyData = {
      firstname: firstName,
      middlename: middleName,
      lastname: lastName,
    };
    try {
      const response = fetch(url, {
        method: "PATCH", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyData), // body data type must match "Content-Type" header
      });
      const result = response.json();
      console.log(result);
      console.log("Did update");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      Applicant Edit Form
      <form onSubmit={handleUpdateForm}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            placeholder="First Name"
          />
        </label>
        <label>
          Middle Name:
          <input
            type="text"
            value={middleName}
            onChange={(e) => {
              setMiddleName(e.target.value);
            }}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </label>
        <button>Update</button>
      </form>
    </div>
  );
};

export default ApplicantEdit;
