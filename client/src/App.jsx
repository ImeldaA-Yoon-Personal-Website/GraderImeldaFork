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
  return (
    <>
      <div>
        <div id="navbar">
          <div className="link">
            <NavLink className="link" to="/">
              HOME
            </NavLink>

            <NavLink className="link" to="/profile">
              PROFILE
            </NavLink>

            <NavLink className="link" to="/adminpage">
              ADMIN
            </NavLink>

            <NavLink className="link" to="/signup">
              SIGNUP
            </NavLink>
            <NavLink className="link" to="/login">
              LOGIN
              {/* {token ? "LOGOUT" : "LOGIN"} */}
            </NavLink>
          </div>
        </div>

        <div>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/profile" element={<Profile />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
