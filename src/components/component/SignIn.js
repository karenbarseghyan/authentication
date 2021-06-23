import React from 'react'
import AuthFormSignIn from "../antDesign/AuthFormSignIn";
import {Link} from 'react-router-dom'

function SignIn() {
    return (
      <div>
        <AuthFormSignIn />
        <h2 style={{  display: "flex", justifyContent: 'center' }}>
          DON'T HAVE AN ACCOUNT? <Link to="/signup" style={{marginLeft: '15px', color: 'red'}}> SIGN-UP </Link>
        </h2>
      </div>
    );
}

export default SignIn
