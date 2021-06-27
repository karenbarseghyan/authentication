import React from 'react'
import {Link} from 'react-router-dom'
import AuthSignIn from "../authSignInUp/AuthSignIn.js"

function SignIn() {
    return (
      <div>
        <AuthSignIn />
        <h2 style={{ display: "flex", justifyContent: "center" }}>
          <span>DON'T HAVE AN ACCOUNT?</span>
          <Link to="/signup" style={{ marginLeft: "15px", color: "red" }}>
            <span> SIGN-UP</span>
          </Link>
        </h2>
      </div>
    );
}

export default SignIn
