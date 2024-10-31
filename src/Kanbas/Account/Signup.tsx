import React from "react";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Signup</h3>
      <input
        id="wd-username"
        placeholder="username"
        className="form-control mb-2"
      />
      <input
        id="wd-password"
        placeholder="password"
        type="password"
        className="form-control mb-2"
      />
      <Link
        id="wd-signin-btn"
        to="/Kanbas/Dashboard"
        className="btn btn-primary w-100"
      >
        Signup
      </Link>
      <br />
      <Link id="wd-signup-link" to="/Kanbas/Account/Signup">
        Signin
      </Link>
    </div>
  );
}