import React, { useEffect, useState } from "react";

const ApplicantList = () => {
  const [applicants, setApplicants] = useState([]);

  // const mockData = [
  //   { id: 1, firstname: "Susan", lastname: "Salian" },
  //   { id: 2, firstname: "Min", lastname: "Yun" },
  //   { id: 3, firstname: "Cassy", lastname: "Ambly" },
  //   { id: 4, firstname: "Eddy", lastname: "Bunt" },
  //   { id: 5, firstname: "Diane", lastname: "Hines" },
  //   { id: 6, firstname: "Judy", lastname: "Zint" },
  // ];

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
              <div key={applicant.id}>
                {applicant.firstname + " " + applicant.lastname}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ApplicantList;
