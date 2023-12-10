import React, { useState } from "react";
import ApplicantEdit from "./ApplicantEdit";

const Applicant = ({ applicant }) => {
  const [isShowEdit, setIsShowEdit] = useState(false);

  function handleEditButton() {
    setIsShowEdit(!isShowEdit);
  }
  return (
    <div>
      <div>
        {applicant.firstname +
          " " +
          applicant.middlename +
          " " +
          applicant.lastname}
      </div>
      <button onClick={handleEditButton}>Edit</button>
      {isShowEdit && <ApplicantEdit applicant={applicant} />}
    </div>
  );
};

export default Applicant;
