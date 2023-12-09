import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import { NavLink } from "react-router-dom";
import Admin from "./routes/Admin";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Profile from "./routes/Profile";
import Signup from "./routes/Signup";

function App() {
  // const [token, setToken] = useState(null);
  // const [userStatus, setUserStatus] = useState(null);
  // const [username, setUsername] = useState(null);
  // const [user_id, setUser_id] = useState(null);
  // const [updateIfChanged, setUpdateIfChanged] = useState(null);
  return (
    <>
      <div>
        {/* <span id="name">FELLOWSHIP</span> */}
        <div id="navbar">
          <div className="link">
            <NavLink
              className="link"
              to="/"
              // style={({ isActive }) =>
              //   isActive
              //     ? {
              //         color: "rgb(255, 230, 0)",
              //         margin: 15,
              //       }
              //     : { color: "white", margin: 15 }
              // }
            >
              HOME
            </NavLink>

            {/* {user_id && ( */}
            <NavLink
              className="link"
              to="/profile"
              // style={({ isActive }) =>
              //   isActive
              //     ? { color: "rgb(255, 230, 0)", margin: 15 }
              //     : { color: "white", margin: 15 }
              // }
            >
              PROFILE
            </NavLink>

            {/* {userStatus === "admin" && ( */}
            <NavLink
              className="link"
              to="/adminpage"
              // style={({ isActive }) =>
              //   isActive
              //     ? { color: "rgb(255, 230, 0)", margin: 15 }
              //     : { color: "white", margin: 15 }
              // }
            >
              ADMIN
            </NavLink>

            <NavLink
              className="link"
              to="/signup"
              // style={({ isActive }) =>
              //   isActive
              //     ? { color: "rgb(255, 230, 0)", margin: 15 }
              //     : { color: "white" }
              // }
            >
              SIGNUP
            </NavLink>
            <NavLink
              className="link"
              to="/login"
              // style={({ isActive }) =>
              //   isActive
              //     ? { color: "rgb(255, 230, 0)", margin: 15 }
              //     : { color: "white", margin: 15 }
              // }
            >
              LOGIN
              {/* {token ? "LOGOUT" : "LOGIN"} */}
            </NavLink>
          </div>
        </div>

        <div>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                // token={token}
                // userStatus={userStatus}
                // user_id={user_id}
                // updateIfChanged={updateIfChanged}
                // setUpdateIfChanged={setUpdateIfChanged}
                />
              }
            />

            <Route
              path="/profile"
              element={
                <Profile
                // token={token}
                // userStatus={userStatus}
                // user_id={user_id}
                />
              }
            />
            <Route
              path="/admin"
              element={
                <Admin
                // token={token}
                // userStatus={userStatus}
                // updateIfChanged={updateIfChanged}
                // setUpdateIfChanged={setUpdateIfChanged}
                // user_id={user_id}
                />
              }
            />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/login"
              element={
                <Login
                // token={token}
                // setToken={setToken}
                // setUserStatus={setUserStatus}
                // setUser_id={setUser_id}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
