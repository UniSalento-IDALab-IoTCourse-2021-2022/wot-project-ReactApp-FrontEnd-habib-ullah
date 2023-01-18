import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Login.css";

async function loginUser(credentials) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export const Login = ({ setToken }) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
    localStorage.setItem("token", JSON.stringify(token));
  };
  return (
    <div className="login-wrapper">
      <div className="card">
        <h1>Log In</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group p-2">
            <label>
              Username
              <input
                type="text"
                className="form-control form-input"
                onChange={(e) => setUserName(e.target.value)}
              />
            </label>
          </div>

          <div className="form-group p-2">
            <label>
              Password
              <input
                type="password"
                className="form-control form-input"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>

          <div className="loginBtn p-2">
            <button type="submit" className="btn btn-outline-dark">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
