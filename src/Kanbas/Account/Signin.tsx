import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import * as db from "../Database";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signin = () => {
    const user = db.users.find(
      (u: any) => u.username === credentials.username && u.password === credentials.password);
    if (!user) return;
    dispatch(setCurrentUser(user));
    navigate("/Kanbas/Dashboard");
  };
  return (
    <div id="wd-signin-screen" className="d-flex flex-column align-items-center justify-content-center">
      <h1 className="text-center mb-4" style={{ fontSize: "2rem", whiteSpace: "nowrap" }}>
        Northeastern University
      </h1>
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <h6>myNortheastern Username</h6>
        <input
          defaultValue={credentials.username}
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
          className="form-control mb-2"
          placeholder="username"
          id="wd-username"
        />
        <h6>myNortheastern Password</h6>
        <input
          defaultValue={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          className="form-control mb-2"
          placeholder="password"
          type="password"
          id="wd-password"
        />
        <button onClick={signin} id="wd-signin-btn" className="btn bg-danger text-white w-100">
          Log In
        </button>
        <Link id="wd-signup-link" to="/Kanbas/Account/Signup" className="d-block text-center mt-3">
          Sign up
        </Link>
      </div>
    </div>
  );
}