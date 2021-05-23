import React, { Component, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Register.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  let handleRegister = async (e) => {
    e.preventDefault();
    let data = {
      name,
      email,
      password,
    };

    let res = await fetch("https://nodepassword.herokuapp.com/auth/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    });

    console.log(res);

    history.push("/");
  };

  return (
    <div className="container register">
      <div className="row">
        <div className="col-lg-12 mb-3">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="form-control"
            autoComplete="off"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="col-lg-12 mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="col-lg-12 mb-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            autoComplete="off"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div className="col-lg-12 mb-3">
          <button
            type="submit"
            className="btn btn-dark form-control"
            onClick={handleRegister}
          >
            Register
          </button>
        </div>
        <div className="col-lg-6 mb-3">
          <Link to="/">
            <a href="">Go Back to Login Page</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
