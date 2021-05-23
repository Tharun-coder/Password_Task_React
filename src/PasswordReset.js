import React, { Component, useState } from "react";
import { Link, useHistory } from "react-router-dom";

export default function Reset() {
  const [email, setEmail] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let res = await fetch(
      `https://nodepassword.herokuapp.com/auth/forgot_password/${email}`
    );

    history.push("/update_password");
  };

  return (
    <div className="container reset">
      <div className="row">
        <div className="col-lg-12 mb-3">
          <label htmlFor="email">Enter your registered Email ID</label>
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
          <button
            type="submit"
            className="btn btn-dark form-control"
            onClick={handleSubmit}
          >
            Submit
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
