import React, { useState } from "react";
import { registerUser } from "../api/auth";
import { Link } from "react-router-dom";


// Register component
const Register = ({ setToken, user }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await registerUser(username, password);
    localStorage.setItem("token", token);
    setToken(token);
    setUsername("");
    setPassword("");
  };

  return (
    <div className="loginCard">
      <h2 className="user">{user?.username}</h2>
      <div className="cardHeader">
        <div className="log">Create an account</div>
      </div>
      <div className="loginForm">
        <form onSubmit={handleSubmit}>
          {/* Username input field */}
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type="text"
            placeholder="Username*"
            className="username"
          ></input>
          {/* Password input field */}
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password*"
            className="password"
          ></input>
          {/* Submit button */}
          <button className="loginButton" type="submit">Sign Up</button>
        </form>
        <span>Already have an account? </span>
        {/* Link to the login page */}
        <Link className="createOne" to="/users/login">Log in</Link>
      </div>
    </div>
  );
};

export default Register;

