import React from 'react'
import AuthFormSignUp from "../antDesign/AuthFormSignUp";
import { Link } from "react-router-dom";

function SignUp() {
    return (
      <div>
        <AuthFormSignUp />
        <h2 style={{ display: "flex", justifyContent: "center" }}>
          ALREADY HAVE AN ACCOUNT? <Link to="/signin" style={{marginLeft: '15px'}}> SIGN-IN </Link>
        </h2>
      </div>
    );
}

export default SignUp
