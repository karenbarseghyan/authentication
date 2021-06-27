import React, {useRef, useState} from 'react'
import "./AuthSignInUp.css";
import { useAuth } from "../../context/AuthContext";

const AuthSignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


  async function handleSubmit(e) {
  e.preventDefault();
  if(passwordRef.current.value !== passwordConfirmRef.current.value) {
    return setError("not match")
  }
  try{
    setError("");
    setLoading(true)
    await signup(emailRef.current.value, passwordRef.current.value)
  } catch {
    setError("failed")
  }
  setLoading(false);
} 

  return (
    <div className="wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <label className="email-box">
          <input
            type="email"
            ref={emailRef}
            id="email"
            placeholder="Email"
            className="email-box__text"
          />
        </label>
        <label className="password-box">
          <input
            type="password"
            ref={passwordRef}
            id="password"
            placeholder="Password"
            className="password-box__text"
          />
        </label>
        <label className="password-box">
          <input
            type="password"
            ref={passwordConfirmRef}
            id="password-confirm"
            placeholder="Password"
            className="password-box__text"
            required
          />
        </label>
        <button disabled={loading} className="form__btn">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default AuthSignUp;
