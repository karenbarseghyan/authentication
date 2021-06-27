import React from 'react'
import { Link } from "react-router-dom";
import AuthSignUp from "../authSignInUp/AuthSignUp";

function SignUp() {
  console.log(5);
    return (
      <div
        style={
          {
            // display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            // flexDirection: "column",
          }
        }
      >
        <AuthSignUp />
        <h2 style={{ display: "flex", justifyContent: "center" }}>
          <span>HAVE AN ACCOUNT?</span>
          <Link to="/signin" style={{ marginLeft: "15px" }}>
            <span>SIGN-IN</span>
          </Link>
        </h2>
      </div>
    );
}

export default SignUp
