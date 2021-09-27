import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import "./SignIn.css";

function SignIn() {
  const history = useHistory();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signIn = e => {
      e.preventDefault();
      auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
          history.push('/')
        })
        .catch(error => alert(error.message))
  }

  const register = e =>{
    e.preventDefault();
    auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
          // it successfully created a new user with email and password
          if (auth) {
            history.push('/')
          }
        })
        .catch(error => alert(error.message))
  }
  return (
    <div className="signIn">
      <Link to="/">
        <img
          className="signIn__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
        />
      </Link>
      <div className="signIn__container">
        <h1>Sign-in</h1>

        <form>

          <h5>E-mail</h5>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

          <h5>Password</h5>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

          <button className="signIn__button" type="submit" onClick={signIn}>Sign In</button>
        </form>

        <p>By Signing in you agree to the Amazon Fake Clone Conditions of Use & Sale. Please see our Privacy Notice. </p>
        <button className="signIn__register-button" type="submit" onClick={register}>Create your amazon account</button>
      </div>
    </div>
  );
}

export default SignIn;
