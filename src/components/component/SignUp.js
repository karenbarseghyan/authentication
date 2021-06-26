import React from 'react'
// import AuthFormSignUp from "../antDesign/AuthFormSignUp";
import { Link } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
import AuthSignUp from "../antDesign/AuthFormSignUp";

function SignUp() {
  console.log(5);
    return (
      <div
        style={{
          // display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
          // flexDirection: "column",
        }}
      >
        <AuthSignUp />
        <div style={{ fontSize: "20px", textAlign: "center" }}>
          <span>HAVE AN ACCOUNT?</span>
          <Link to="/signin" style={{ marginLeft: "15px" }}>
            SIGN-IN
          </Link>
        </div>
      </div>
    );
}

export default SignUp
