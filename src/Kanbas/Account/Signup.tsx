import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Signup() {
  const [role, setRole] = useState("");
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
      <select
        id="wd-role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="form-control mb-2"
      >
        <option value="" disabled>
          Select Role
        </option>
        <option value="student">Student</option>
        <option value="faculty">Faculty</option>
      </select>
      <Link
        id="wd-signin-btn"
        to="/Kanbas/Dashboard"
        className="btn bg-danger text-white w-100"
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