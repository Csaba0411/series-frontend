import React, { useState } from "react";
import axios from "axios";
import "../style/SignUp.css";

export default function Register() {
  const [userName, setUserName] = useState([]);
  const [password, setPassword] = useState([]);

  const getUserName = (e) => {
    setUserName(e.target.value);
  };

  const getPassword = (e) => {
    setPassword(e.target.value);
  };

  const postUserDetails = () => {
    axios.post("http://localhost:8080/register", {
      username: userName,
      password: password,
    });
  };

  return (
    <div className="contact">
      <div className="head">
        <h3>Sign up here</h3>
      </div>
      <form>
        <label>Username:</label>
        <input type="text" onChange={getUserName} />
        <label>Password:</label>
        <input type="password" name="name" onChange={getPassword} />
        <input type="submit" value="Submit" onClick={postUserDetails} />
      </form>
    </div>
  );
}
