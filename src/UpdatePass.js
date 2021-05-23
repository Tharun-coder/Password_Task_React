import React, { Component, useState } from "react";
import { Link } from "react-router-dom";

export default function UpdatePass() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [secret, setSecret] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await fetch(
      `https://nodepassword.herokuapp.com/auth/password_reset/${secret}/${cpassword}`,
      {
        method: "POST",
        body: JSON.stringify(),
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    if (res.status === 200) {
      alert("Password updated Successfully");
    } else {
      alert("Error Occured");
    }
  };

  return (
    <div className="container reset">
      <div className="row">
        <div className="col-lg-12 mb-3">
          <label htmlFor="secret">Enter Secret Code (Receive via mail)</label>
          <input
            type="text"
            id="secret"
            className="form-control"
            autoComplete="off"
            onChange={(e) => setSecret(e.target.value)}
            value={secret}
          />
        </div>
        <div className="col-lg-12 mb-3">
          <label htmlFor="password">New Password</label>
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
          <label htmlFor="confirm_password">Confirm Password</label>
          <input
            type="password"
            id="confirm_password"
            className="form-control"
            autoComplete="off"
            onChange={(e) => setCPassword(e.target.value)}
            value={cpassword}
          />
        </div>

        <div className="col-lg-12 mb-3">
          <button
            type="submit"
            className="btn btn-dark form-control"
            onClick={handleSubmit}
          >
            Update Password
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
