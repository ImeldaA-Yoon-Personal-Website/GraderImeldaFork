import React from "react";

const Applicant = ({ applicant }) => {
  return (
    <div>
      {" "}
      {applicant.firstname +
        " " +
        applicant.middlename +
        " " +
        applicant.lastname}
    </div>
  );
};

export default Applicant;
