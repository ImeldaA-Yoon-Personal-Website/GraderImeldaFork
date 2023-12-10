import React, { useEffect, useState } from "react";
import User from "./User";
import { BASE_URL } from "../api";

const UserList = () => {
  const [users, setUsers] = useState([]);

  async function handleDelete(user) {
    const url = `${BASE_URL}/users/${user.id}`;
    console.log("Deleting user from", url);

    try {
      const response = await fetch(url, { method: "DELETE" });
      console.log("This user was deleted", response);
      await fetchUsers();
    } catch (error) {
      console.log(error);
    }
  }
  async function fetchUsers() {
    const url = "http://localhost:3006/api/v1/users";
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.allUsers);
    setUsers(data.allUsers);
    return data.allUsers;
  }
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      <h1>User List</h1>
      <div>
        {users &&
          users.map((user) => {
            return (
              <div key={user.id} className="flex">
                <User user={user} />
                <br />
                <br />
                <button
                  onClick={() => {
                    handleDelete(user);
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
export default UserList;
