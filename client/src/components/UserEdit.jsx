import React, { useState } from "react";
import { BASE_URL } from "../api";

const UserEdit = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstname);
  const [lastName, setLastName] = useState(user.lastname);

  async function handleUpdateForm(e) {
    e.preventDefault;
    const url = ~`${BASE_URL}/users/${user.id}`;
    const bodyData = {
      firstname: firstName,
      lastname: lastName,
    };
    try {
      const response = fetch(url, {
        method: "PATCH", // *GET, POST, PUT, DELETE...
        mode: "cors", //no cors, *cors, same-origin
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyData), //bodydata tyle must match "Content-type" header
      });
      const result = response.json();
      console.log(result);
      console.log("Update done!");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      User Edit Form
      <form onSubmit={handleUpdateForm}>
        <label>
          First Name:
          <input
            type="text"
            valus={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            placeholder="First Name"
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            value={lastname}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </label>
        <button>UPDATE</button>
      </form>
    </div>
  );
};

export default UserEdit;
