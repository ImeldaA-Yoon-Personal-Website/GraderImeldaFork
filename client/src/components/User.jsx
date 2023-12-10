import React, { useState } from "react";
import UserEdit from "./UserEdit";

const User = ({ user }) => {
  const [isShowEdit, setIsShowEdit] = useState(false);
  function handleEditButton() {
    setIsShowEdit(!isShowEdit);
  }
  return (
    <div>
      <div> {user.firstname + " " + user.lastname}</div>
      <button onClick={handleEditButton}>EDIT</button>
      {isShowEdit && <UserEdit user={user} />}
    </div>
  );
};

export default User;
