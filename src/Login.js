import React, { Component, useState } from "react";
import { Link, useHistory } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  let handleSubmit = async (e) => {
    e.preventDefault();

    let data = {
      email,
      password,
    };

    let res = await fetch(
      `https://nodepassword.herokuapp.com/auth/login/${email}/${password}`
    );

    if (res.status === 200) {
      history.push("/home");
    } else {
      alert("Invalid Password");
    }
  };

  return (
    <div className="container login">
      <div className="row">
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
            className="btn btn-primary form-control"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
        <div className="col-lg-6 mb-3">
          <Link to="/password_reset">
            <a href="">Forgot Password?</a>
          </Link>
        </div>
        <div className="col-lg-6 mb-3">
          <span>New User?</span>{" "}
          <Link to="/register">
            <a href="">Register Here</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
