import React, { useEffect, useState } from "react";
import Applicant from "./Applicant";
import { BASE_URL } from "../api";

const ApplicantList = () => {
  const [applicants, setApplicants] = useState([]);

  async function handleDelete(applicant) {
    const url = `${BASE_URL}/applicants/${applicant.id}`;
    console.log("Deleting post from ", url);

    try {
      const response = await fetch(url, {
        method: "DELETE",
      });
      console.log("This applicant was deleted", response);
      await fetchApplicants();
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchApplicants() {
    const url = "http://localhost:3006/api/v1/applicants";

    const res = await fetch(url);
    const data = await res.json();
    console.log(data.allApplicants);
    setApplicants(data.allApplicants);
    return data.allApplicants;
  }
  useEffect(() => {
    fetchApplicants();
  }, []);
  return (
    <div>
      <h1>📝 Applicant List</h1>
      <div>
        {applicants &&
          applicants.map((applicant) => {
            return (
              <div key={applicant.id} className="flex">
                <Applicant applicant={applicant} />
                <button
                  onClick={() => {
                    handleDelete(applicant);
                  }}
                >
                  DELETE
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ApplicantList;
