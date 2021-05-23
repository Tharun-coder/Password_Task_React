import React, { Component } from "react";
import { useHistory } from "react-router";

export default function Home() {
  const history = useHistory();
  const handleClick = (e) => {
    history.push("/");
  };
  return (
    <div className="container home">
      <div className="row">
        <div className="col-lg-12">
          <h1>You have logged in successfully</h1>
        </div>
        <div className="col-lg-12">
          <button className="btn btn-danger" onClick={handleClick}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
